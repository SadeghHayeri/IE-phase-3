import React, { Component } from 'react'
import PersianView from '../../common/persian-view'

import './style.scss'
import {Link} from "react-router-dom"
import BindingService from '../../../services/binder'

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    componentDidMount() {
        BindingService.listen('AuthChange', (args) => {
            const user = args[0];
            if (user) {
                this.setState({
                    isLogin: true,
                    user: user
                });
            } else {
                this.setState({
                    isLogin: false,
                    user: null
                })
            }
        });
    }

    render() {
        let user = this.state.user;
        let isLogin = this.state.isLogin;
        return (
            <div className="dropdown-content">
                <div className="offset"></div>
                <div className="base-card light-card">
                    <div className="name">{isLogin ? user.name : "وارد شوید..."}</div>
                    <div className="credit">
                        <span className="title">اعتبار</span>
                        <span className="amount"><PersianView data={isLogin ? user.balance : "0"}/> تومان</span>
                    </div>
                    <Link to={"/account"}><button className="btn-custom" >افزایش اعتبار</button></Link>
                </div>
            </div>
        );
    }
}

export default DropDown