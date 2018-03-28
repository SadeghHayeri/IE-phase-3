import React, { Component } from 'react';

import './style.scss';
import Auth from "../../../services/auth";

class DropDown extends Component {
    render() {
        return (
            <div className="dropdown-content">
                <div className="offset"></div>
                <div className="base-card light-card">
                    <div className="name">{Auth.getUser().name}</div>
                    <div className="credit">
                        <span className="title">اعتبار</span>
                        <span className="amount">{Auth.getUser().credit} تومان</span>
                    </div>
                    <button>افزایش اعتبار</button>
                </div>
            </div>
        );
    }
}

export default DropDown;