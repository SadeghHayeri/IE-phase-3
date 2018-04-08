import React from 'react';
import BaseForm from '../../base/baseform'
import queryString from 'query-string'
import './style.scss';
import {Link} from "react-router-dom";
import NumberService from '../../../services/number'
import { withRouter } from 'react-router'


class SearchForm extends BaseForm {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                'minimum-area': "",
                'maximum-price': "",
                'building-type': -1,
                'deal-type': "0"
            }
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.formData['building-type'] !== -1) {
            let parameters = {};
            if (this.state.formData['building-type'])
                parameters['building-type'] = parseInt(NumberService.toEnglish(this.state.formData['building-type']), 10);
            if (this.state.formData['deal-type'])
                parameters['deal-type'] = parseInt(NumberService.toEnglish(this.state.formData['deal-type']), 10);
            if (this.state.formData['minimum-area'])
                parameters['minimum-area'] = parseInt(NumberService.toEnglish(this.state.formData['minimum-area']), 10);
            if (this.state.formData['maximum-price'])
                parameters['maximum-price'] = parseInt(NumberService.toEnglish(this.state.formData['maximum-price']), 10);

            this.props.history.push({pathname: '/search', search: queryString.stringify(parameters)});
            if (this.props.location.pathname === '/search')
                window.location.reload();
        }
    }

    render() {
        return (
            <div className="container">
                { (this.props.title) && <h3 className="gray-content title">{this.props.title}</h3> }
                <div className="row gray-area base-card dark-card no-margin">
                    <form action="/search" className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="col-md-4 col-xs-12">
                            <div className="unit" htmlFor="minimum-area">متر مربع</div>
                            <input name="minimum-area" id="minimum-area" type="text" placeholder="حداقل متراژ" value={this.state.formData['minimum-area']} onChange={this.handleNumberChange}/>
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
                            <button className="btn-custom"   type="submit">جستجو</button>
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

