import React, { Component } from 'react';
import Footer from "../common/footer";
import LoginForm from "./login-form";
import Navbar from "../common/navbar";
import BreadCrumb from "../common/breadcrumb";
import {withRouter} from "react-router";
import BindingService from "../../services/binder";

class Login extends Component {
    componentDidMount() {
        document.title = "خانه به دوش | ورود به سیستم";

        BindingService.listen("AuthChange", (args) => {
            const user = args[0];
            if (user) {
                this.props.history.push({pathname: "/"});
            }
        });
    }

    render() {
        return (
            <div>
                <Navbar/>
                <BreadCrumb title="ورود به خانه به دوش"/>
                <LoginForm/>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Login);
