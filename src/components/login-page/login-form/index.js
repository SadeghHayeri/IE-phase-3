import React, { Component } from 'react';
import BaseForm from "../../base/baseform";
import Toast from "../../../services/toast";
import RequestService from "../../../services/request";
import "./style.scss";
import BindingService from "../../../services/binder";
import {withRouter} from "react-router";
import RedirectService from "../../../services/redirect";


class LoginForm extends BaseForm {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                "username": "",
                "password": ""
            }
        }
    }

    validateFormInputs() {
        let formData = this.state.formData;
        let error = true;
        if (this.isEmpty(formData.username)) {
            Toast.warning("فیلد نام کاربری الزامی است");
            error = false;
        }
        if (this.isEmpty(formData.password)) {
            Toast.warning("فیلد کلمه عبور الزامی است");
            error = false;
        }
        return error;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.validateFormInputs())
            return;

        let parameters = this.state.formData;

        RequestService.postRequest("/login", parameters,
            (data) => {
                localStorage.setItem("token", data.token);
                BindingService.signal('AuthChange', data.user);
                const url = RedirectService.getReferer("/");
                this.props.history.push({pathname: url});
            }
        );
    }

    render() {
        return (
            <section className="container login-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-12 margin-top">
                                <input name="username" id="username" type="text" placeholder="نام کاربری"
                                       value={this.state.formData.username}
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-12 margin-top">
                                <input name="password" id="password" type="password" placeholder="کلمه‌ی عبور"
                                       value={this.state.formData.password}
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-5 submit-button-container">
                                <button className="btn-custom"  type="submit">ورود</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default withRouter(LoginForm);
