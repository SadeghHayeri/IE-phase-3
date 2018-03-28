import React, { Component } from 'react';

import Navbar from "../common/navbar";
import BreadCrumb from '../common/breadcrumb'
import Footer from "../common/footer";

import AccountForm from './account-form'

class AccountPage extends Component {
    componentDidMount() {
        document.title = "خانه به دوش | ناحیه کاربری";
    }

    render() {
        return (
            <div>
                <Navbar/>
                <BreadCrumb title="افزایش موجودی"/>
                <AccountForm/>
                <Footer/>
            </div>
        );
    }
}

export default AccountPage;
