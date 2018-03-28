import React, { Component } from 'react';
import './style.scss';
import DropDown from "../dropdown";

class UserArea extends Component {
    render() {
        return (
            <div className="user-button-row dropdown-container">
                <div className="user-button">
                    <i className="fa-lg far fa-smile"></i>
                    <span>ناحیه کاربری</span>
                </div>

                <DropDown/>
            </div>
        );
    }
}

export default UserArea;
