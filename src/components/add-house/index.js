import React, { Component } from 'react';

import Navbar from "../common/navbar";
import BreadCrumb from '../common/breadcrumb'
import Footer from "../common/footer";
import AddHouseForm from "./add-house-form";


class AddHousePage extends Component {
    componentDidMount() {
        document.title = "خانه به دوش | ثبت ملک جدید";
    }

    render() {

        return (
            <div>
                <Navbar/>
                <BreadCrumb title="ثبت ملک جدید در خانه به دوش"/>
                <AddHouseForm/>
                <Footer/>
            </div>
        );
    }
}

export default AddHousePage;
