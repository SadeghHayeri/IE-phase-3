import React from 'react';
import './style.scss';
import PersianView from "../../common/persian-view/index";
import Auth from '../../../services/auth'
import BaseForm from '../../base/baseform'
import RequestService from '../../../services/request'
import NumberService from "../../../services/number";

import BindingService from '../../../services/binder'

class AccountForm extends BaseForm {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isLogin: false,
            formData: {
                'price': ''
            }
        };
    }

    componentDidMount() {
        BindingService.listen('AuthChange', (args) => {
            const user = args[0];
            if(user) {
                let state = this.state;
                state.isLogin = true;
                state.user = user;
                this.setState(state);
            } else {
                let state = this.state;
                state.isLogin = false;
                state.user = null;
                this.setState(state);
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const parameters = {
            'balance-value': parseInt(NumberService.toEnglish(this.state.formData.price), 10),
        };

        RequestService.postRequest('/auth/charge', parameters,
            (response) => {
                Auth.makeRequest(
                    (data) => {
                        this.state.user = data;
                        this.setState(this.state);
                        BindingService.signal('AuthChange', data);
                    }
                );
            }
        );
    }

    render() {
        let user = this.state.user;
        let isLogin = this.state.isLogin;

        return (
            <div>
                <section className="container account-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-4 amount">
                                <p>اعتبار کنونی</p>
                                <p><PersianView data={isLogin ? user.balance : "0"}/> تومان</p>
                            </div>
                            <div className="offset-2"></div>
                            <div className="col-md-6 margin-top">
                                <div className="unit" htmlFor="area">تومان</div>
                                <input name="price" id="price" type="text" placeholder="مبلغ مورد نظر"
                                       value={this.state.formData.price}
                                       onChange={this.handleNumberChange}
                                />
                            </div>
                            <div className="offset-6"></div>
                            <div className="col-md-6 submit-button-container">
                                <button className="btn-custom"  type="submit">افزایش اعتبار</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

export default AccountForm;
