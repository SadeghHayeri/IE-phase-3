import React, { Component } from 'react';

import Search from '../../services/search'

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

        const item = Search.getHouse(this.props.match.params.owner, this.props.match.params.id);

        return (
            <div>
                <Navbar/>
                <BreadCrumb title="مشخصات کامل ملک"/>
                <HouseInfo item={item}/>
                <Footer/>
            </div>
        );
    }
}

export default HouseLeafPage;
