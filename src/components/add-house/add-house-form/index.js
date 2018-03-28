import React, { Component } from 'react';

import './style.scss';

class AddHouseForm extends Component {
    render() {
        return (
            <section className="container add-house-container">
                <form action="/">
                    <div className="row">
                        <div className="col-md-12">
                            <input type="radio" name="building-type" value="0" id="radio-1" defaultChecked={true}/>
                            <label className="margin-left" htmlFor="radio-1">خرید</label>
                            <input type="radio" name="building-type" value="1" id="radio-2"/>
                            <label className="margin-left" htmlFor="radio-2">رهن و اجاره</label>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="building-type"></label>
                            <select name="building-type" id="building-type" defaultValue={-1}>
                                <option value="-1" className="placeholder" disabled>نوع ملک</option>
                                <option value="0">آپارتمان</option>
                                <option value="1">ویلایی</option>
                            </select>
                        </div>
                        <div className="col-md-6 margin-top">
                            <div className="unit" htmlFor="area">متر مربع</div>
                            <input name="area" id="area" type="text" placeholder="متراژ"/>
                        </div>
                        <div className="col-md-6 margin-top">
                            <input name="address" id="address" type="text" placeholder="آدرس"/>
                        </div>
                        <div className="col-md-6 margin-top">
                            <div className="unit" htmlFor="base-price">تومان</div>
                            <input name="base-price" id="base-price" type="text" placeholder="قیمت رهن"/>
                        </div>
                        <div className="col-md-6 margin-top">
                            <input name="phone-number" id="phone-number" type="text" placeholder="شماره تلفن"/>
                        </div>
                        <div className="col-md-6 margin-top">
                            <div className="unit" htmlFor="rent-price">تومان</div>
                            <input name="rent-price" id="rent-price" type="text" placeholder="قیمت اجاره"/>
                        </div>
                        <div className="col-md-12 margin-top">
                            <input name="description" id="description" type="text" placeholder="توضیحات"/>
                        </div>
                        <div className="offset-7"></div>
                        <div className="col-md-5 submit-button-container">
                            <button type="submit">ثبت ملک</button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default AddHouseForm;
