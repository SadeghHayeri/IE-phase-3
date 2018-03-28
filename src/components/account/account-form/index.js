import React, { Component } from 'react';
import './style.scss';
import PersianView from "../../common/persian-view/index";
import Auth from '../../../services/auth'

class AccountForm extends Component {

    render() {
        return (
            <section className="container account-container">
                <form method="post" action="">
                    <div className="row">
                        <div className="col-md-4 amount">
                            <p>اعتبار کنونی</p>
                            <p><PersianView data={Auth.getUser().credit}/> تومان</p>
                        </div>
                        <div className="offset-2"></div>
                        <div className="col-md-6 margin-top">
                            <div className="unit" for="area">تومان</div>
                            <input name="area" id="area" type="text" placeholder="مبلغ مورد نظر"/>
                        </div>
                        <div className="offset-6"></div>
                        <div className="col-md-6 submit-button-container">
                            <button type="submit">افزایش اعتبار</button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default AccountForm;
