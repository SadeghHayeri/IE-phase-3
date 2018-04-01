import React, { Component } from 'react';

import HouseService from '../../services/search'

import './style.scss'
import BreadCrumb from '../common/breadcrumb'
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import HouseList from "./house-list";
import SearchForm from "../common/search-form/index";

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            houses: []
        };
    }

    componentDidMount() {
        document.title = "خانه به دوش | جستجو";

        if(!this.props.location.formData)
            this.props.location.formData = {};

        const searchResults = HouseService.query(this.props.location.formData, (data) => {
            this.setState({houses: data});
        }, (error) => {
            console.log("error!");
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <Navbar/>
                <BreadCrumb title="نتایج جستجو"/>

                <HouseList items={this.state.houses}/>
                <SearchForm title="جستجوی مجدد" />
                <Footer/>
            </div>
        );
    }
}

export default SearchPage;
