import React, { Component } from 'react';

import Search from '../../services/search'

import './style.scss'
import BreadCrumb from '../common/breadcrumb'
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import HouseList from "./house-list";
import SearchForm from "../common/search-form/index";

class SearchPage extends Component {
    componentDidMount() {
        document.title = "خانه به دوش | جستجو";
    }

    render() {

        //TODO: complete search query
        const searchResults = Search.query({"folan": "filan"});

        return (
            <div>
                <Navbar/>
                <BreadCrumb title="نتایج جستجو"/>

                <HouseList items={searchResults}/>
                <SearchForm title="جستجوی مجدد" />
                <Footer/>
            </div>
        );
    }
}

export default SearchPage;
