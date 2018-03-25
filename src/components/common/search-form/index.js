import React, { Component } from 'react';
import './search-form.scss';

class SearchForm extends Component {

    render() {
        return (
            <div>
                <div className="row gray-area base-card dark-card no-margin">
                    <form action="/search.html" className="form-inline">
                        <div className="col-md-4 col-xs-12">
                            <div className="unit" htmlFor="area">متر مربع</div>
                            <input name="area" id="area" type="text" placeholder="حداکثر متراژ"/>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="unit" htmlFor="price">تومان</div>
                            <input name="price" id="price" type="text" placeholder="حداکثر قیمت"/>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <label htmlFor="building-type"></label>
                            <select name="building-type" id="building-type" defaultValue={-1}>
                                <option value="-1" className="placeholder" disabled>نوع ملک</option>
                                <option value="0">آپارتمان</option>
                                <option value="1">ویلایی</option>
                            </select>
                        </div>
                        <div className="offset-md-3 col-md-4 col-xs-12 margin-top">
                            <input type="radio" name="building-type" value="0" id="radio-1" defaultChecked={true}/>
                            <label htmlFor="radio-1">خرید</label>
                            <input type="radio" name="building-type" value="1" id="radio-2"/>
                            <label htmlFor="radio-2">رهن و اجاره</label>
                        </div>
                        <div className="col-md-5 col-xs-12 margin-top">
                            <button  type="submit">جستجو</button>
                        </div>
                    </form>
                </div>
                <div className="row gray-area base-card dark-card center no-margin">
                    <span>صاحب خانه هستید؟<a className="link" href="#"> خانه خود را ثبت کنید</a></span>
                </div>
            </div>
        );
    }
}

export default SearchForm;

