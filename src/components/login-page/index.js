import React, { Component } from 'react';
import Footer from "../common/footer";
import LoginForm from "./login-form";
import Navbar from "../common/navbar";
import BreadCrumb from "../common/breadcrumb";

class Login extends Component {
    componentDidMount() {
        document.title = "خانه به دوش | ورود به سیستم";
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

export default Login;
