import React, { Component } from 'react';

import './style.scss';
import logo from '../../common/images/logo.png';
import {Link} from "react-router-dom";
import DropDown from "../dropdown";

class Navbar extends Component {

    render() {
        return (
            <nav className="nav-box-shadow">
                <div className="container bigger-container">
                    <div className="row">
                        <div className="user-button dropdown-container">
                            <span className="area-name">ناحیه کاربری</span>
                            <i className="fa-lg far fa-smile"></i>
                            <DropDown/>
                        </div>
                    </div>
                    <Link to="/" className="logo">
                        <h3>خانه به دوش</h3>
                        <img src={logo} alt=""/>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;