import React from 'react';
import BaseForm from "../../base/baseform";
import NumberService from "../../../services/number";
import './style.scss';
import RequestService from "../../../services/request";
import {withRouter} from "react-router";

class AddHouseForm extends BaseForm {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                "building-type": -1,
                "deal-type": "1",
                "area": "",
                "address": "",
                "price": {
                    "base": "",
                    "rent": "",
                    "buy": ""
                },
                "phone": "",
                "description": ""
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let parameters = this.state.formData;
        parameters.area = parseInt(NumberService.toEnglish(parameters.area), 10);
        parameters.price.base = parseInt(NumberService.toEnglish(parameters.price.base), 10);
        parameters.price.rent = parseInt(NumberService.toEnglish(parameters.price.rent), 10);
        parameters.price.buy = parseInt(NumberService.toEnglish(parameters.price.buy ), 10);

        RequestService.postRequest("/house", parameters,
            (data) => {
                this.props.history.push({pathname: '/house/' + data.owner + '/' + data.id});
            }
        );
    }

    render() {
        return (
            <section className="container add-house-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <input type="radio" name="deal-type" value="0" id="radio-1"
                                   checked={this.state.formData["deal-type"] === "0"}
                                   onChange={this.handleChange}/>
                            <label className="margin-left" htmlFor="radio-1">خرید</label>
                            <input type="radio" name="deal-type" value="1" id="radio-2"
                                   checked={this.state.formData["deal-type"] === "1"}
                                   onChange={this.handleChange}/>
                            <label className="margin-left" htmlFor="radio-2">رهن و اجاره</label>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="building-type"></label>
                            <select name="building-type" id="building-type"
                                    value={this.state.formData["building-type"]}
                                    onChange={this.handleChange}>
                                <option value="-1" className="placeholder" disabled>نوع ملک</option>
                                <option value="0">آپارتمان</option>
                                <option value="1">ویلایی</option>
                            </select>
                        </div>
                        <div className="col-md-6 margin-top">
                            <div className="unit" htmlFor="area">متر مربع</div>
                            <input name="area" id="area" type="text" placeholder="متراژ"
                                   value={this.state.formData.area}
                                   onChange={this.handleNumberChange}/>
                        </div>
                        <div className="col-md-6 margin-top">
                            <input name="address" id="address" type="text" placeholder="آدرس"
                                   value={this.state.formData.address}
                                   onChange={this.handleChange}/>
                        </div>
                        {
                            (this.state.formData["deal-type"] === "1")
                                ?
                            <div className="col-md-6 margin-top">
                            <div className="unit" htmlFor="base">تومان</div>
                            <input name="base" id="base" type="text" placeholder="قیمت رهن"
                                   value={this.state.formData.price.base}
                                   onChange={this.handlePriceNumberChange}/>
                            </div>
                                :
                            <div className="col-md-6 margin-top">
                                <div className="unit" htmlFor="buy">تومان</div>
                                <input name="buy" id="buy" type="text" placeholder="قیمت خرید"
                                       value={this.state.formData.price.buy}
                                       onChange={this.handlePriceNumberChange}/>
                            </div>
                        }
                        <div className="col-md-6 margin-top">
                            <input name="number" id="number" type="text" placeholder="شماره تلفن"
                                   value={this.state.formData.number}
                                   onChange={this.handleNumberChange}/>
                        </div>
                        {
                            (this.state.formData["deal-type"] === "1")
                                ?
                            <div className="col-md-6 margin-top">
                                <div className="unit" htmlFor="rent">تومان</div>
                                <input name="rent" id="rent" type="text" placeholder="قیمت اجاره"
                                       value={this.state.formData.price.rent}
                                       onChange={this.handlePriceNumberChange}/>
                            </div>
                                :
                            <div className="col-md-6"></div>
                        }
                        <div className="col-md-12 margin-top">
                            <input name="description" id="description" type="text" placeholder="توضیحات"
                                   value={this.state.formData.description}
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="offset-7"></div>
                        <div className="col-md-5 submit-button-container">
                            <button className="btn-custom"  type="submit">ثبت ملک</button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default  withRouter(AddHouseForm);
