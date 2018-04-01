import React, { Component } from 'react';
import './style.scss';
import {Link} from "react-router-dom";
import NumberService from '../../../services/number'
import { withRouter } from 'react-router'


class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            formData: {
                'minimum-area': "",
                'maximum-price': "",
                'building-type': -1,
                'deal-type': "0"
            }
        };
    }

    handleNumberChange(event) {
        let value = event.target.value;
        if(value) {
            let persianValue = NumberService.toPersian(value);
            if (NumberService.isPersianNumber(persianValue)) {
                let data = this.state.formData;
                data[event.target.name] = persianValue;
                this.setState({formData: data});
            }
        } else {
            let data = this.state.formData;
            data[event.target.name] = "";
            this.setState({formData: data});
        }
    }

    handleChange(event) {
        let data = this.state.formData;
        data[event.target.name] = event.target.value;
        this.setState({formData: data});
    }

    handleSubmit(e) {
        e.preventDefault();
        const parameters = {
            'building-type': parseInt(NumberService.toEnglish(this.state.formData['building-type'])),
            'deal-type': parseInt(NumberService.toEnglish(this.state.formData['deal-type'])),
            'minimum-area': parseInt(NumberService.toEnglish(this.state.formData['minimum-area'])),
            'maximum-price': parseInt(NumberService.toEnglish(this.state.formData['maximum-price'])),
        };

        // const sampleFormData = {
        //     'building-type': 1,
        //     'deal-type': 0,
        //     'minimum-area': 100,
        //     'maximum-price': 1000000
        // };

        this.props.history.push({pathname: '/search', formData: parameters});
    }

    render() {
        return (
            <div className="container">
                { (this.props.title) && <h3 className="gray-content title">{this.props.title}</h3> }
                <div className="row gray-area base-card dark-card no-margin">
                    <form action="/search" className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="col-md-4 col-xs-12">
                            <div className="unit" htmlFor="minimum-area">متر مربع</div>
                            <input name="minimum-area" id="minimum-area" type="text" placeholder="حداکثر متراژ" value={this.state.formData['minimum-area']} onChange={this.handleNumberChange}/>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="unit" htmlFor="maximum-price">تومان</div>
                            <input name="maximum-price" id="maximum-price" type="text" placeholder="حداکثر قیمت" value={this.state.formData['maximum-price']} onChange={this.handleNumberChange}/>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <label htmlFor="building-type"></label>
                            <select name="building-type" id="building-type" value={this.state.formData["building-type"]} onChange={this.handleChange}>
                                <option value="-1" className="placeholder" disabled>نوع ملک</option>
                                <option value="0">آپارتمان</option>
                                <option value="1">ویلایی</option>
                            </select>
                        </div>
                        <div className="offset-md-3 col-md-4 col-xs-12 margin-top">
                            <input type="radio" name="deal-type" value="0" id="radio-1"
                                   checked={this.state.formData["deal-type"] === "0"}
                                   onChange={this.handleChange}/>
                            <label htmlFor="radio-1">خرید</label>
                            <input type="radio" name="deal-type" value="1" id="radio-2"
                                   checked={this.state.formData["deal-type"] === "1"}
                                   onChange={this.handleChange}/>
                            <label htmlFor="radio-2">رهن و اجاره</label>
                        </div>
                        <div className="col-md-5 col-xs-12 margin-top">
                            <button  type="submit">جستجو</button>
                        </div>
                    </form>
                </div>
                <div className="row gray-area base-card dark-card center no-margin">
                    <span>صاحب خانه هستید؟<Link className="link" to="/add-house"> خانه خود را ثبت کنید</Link></span>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchForm);

