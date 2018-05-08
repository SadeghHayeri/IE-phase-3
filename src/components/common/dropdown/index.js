import React, { Component } from 'react'
import PersianView from '../../common/persian-view'

import './style.scss'
import {Link} from "react-router-dom"
import BindingService from '../../../services/binder'
import {withRouter} from "react-router";
import Toast from "../../../services/toast";

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
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

    handleLogoutClick() {
        console.log("logout");
        BindingService.signal('AuthChange', null);
        localStorage.removeItem("token");
        Toast.success("خروج با موفقیت انجام شد");
        this.props.history.push({pathname: '/'});
    }

    render() {
        let user = this.state.user;
        let isLogin = this.state.isLogin;
        return (
            <div className="dropdown-content">
                <div className="offset"></div>
                <div className="base-card light-card">
                    { isLogin ?
                        <div>
                            <div className="name">{user.name}</div>
                            <div className="credit">
                                <span className="title">اعتبار</span>
                                <span className="amount"><PersianView data={isLogin ? user.balance : "0"}/> تومان</span>
                            </div>
                            <Link to={"/account"}><button className="btn-custom" >افزایش اعتبار</button></Link>
                            <button className="btn-custom btn-red margin-top" onClick={this.handleLogoutClick}>خروج از سیستم</button>
                        </div>
                        :
                        <Link to={"/login"}><button className="btn-custom" >ورود</button></Link>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(DropDown);