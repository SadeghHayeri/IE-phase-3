import React, { Component } from 'react';
import './style.scss';
import Auth from "../../../services/auth";

class UserArea extends Component {
    render() {
        return (
            <div className="user-button-row dropdown-container">
                <div className="user-button">
                    <i className="fa-lg far fa-smile"></i>
                    <span>ناحیه کاربری</span>
                </div>

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
            </div>
        );
    }
}

export default UserArea;
