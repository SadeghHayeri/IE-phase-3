import React, { Component } from 'react';
import PersianView from '../../common/persian-view'

import './style.scss';
import Auth from "../../../services/auth";
import {Link} from "react-router-dom";

class DropDown extends Component {
    render() {
        return (
            <div className="dropdown-content">
                <div className="offset"></div>
                <div className="base-card light-card">
                    <div className="name">{Auth.getUser().name}</div>
                    <div className="credit">
                        <span className="title">اعتبار</span>
                        <span className="amount"><PersianView data={Auth.getUser().credit}/> تومان</span>
                    </div>
                    <Link to={"/account"}><button>افزایش اعتبار</button></Link>
                </div>
            </div>
        );
    }
}

export default DropDown;