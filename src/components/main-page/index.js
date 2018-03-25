import React, { Component } from 'react';
import logo from '../common/images/logo.png';
import UserArea from '../common/userarea';
import './header.scss';
import Auth from '../../services/auth.js';
import SearchForm from '../common/search-form'


class MainPage extends Component {
    render() {
        return (
            <header>
                <div className="background">
                    <div className="backgroundImg base"></div>
                    <div className="backgroundImg backgroundImg1 slideShow"></div>
                    <div className="backgroundImg backgroundImg2 slideShow"></div>
                    <div className="backgroundImg backgroundImg3 slideShow"></div>
                    <div className="backgroundImg backgroundImg4 slideShow"></div>
                </div>
                <div className="container">
                    <div className="row ltr">
                        <UserArea user={Auth.getUser()}/>
                    </div>
                    <a href="/" className="row logo-container">
                        <div className="logo">
                            <img src={logo} alt=""/>
                            <h1>خانه به دوش</h1>
                        </div>
                    </a>
                    <SearchForm/>
                </div>
            </header>
        );
    }
}

export default MainPage;
