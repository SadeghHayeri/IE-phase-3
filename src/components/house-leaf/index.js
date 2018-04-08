import React, { Component } from 'react';

import Navbar from "../common/navbar";
import BreadCrumb from '../common/breadcrumb'
import Footer from "../common/footer";
import HouseInfo from "./house-info";

import './style.scss';

class HouseLeafPage extends Component {
    componentDidMount() {
        document.title = "خانه به دوش | اطلاعات ملک";
    }

    render() {
        return (
            <div>
                <Navbar/>
                <BreadCrumb title="مشخصات کامل ملک"/>
                <HouseInfo params={this.props.match.params}/>
                <Footer/>
            </div>
        );
    }
}

export default HouseLeafPage;
