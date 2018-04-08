import React, { Component } from 'react';
import {BuildingType, DealType} from "../../../services/enums";
import RequestService from "../../../services/request";
import Search from "../../../services/search";
import {Link} from "react-router-dom";
import PersianView from "../../common/persian-view";


class HouseInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            house: {},
            isLoading: true,
            error: false
        };
        this.handlePayClick = this.handlePayClick.bind(this);
    }

    componentDidMount() {
        Search.getHouse(this.props.params.owner, this.props.params.id,
            (data) => {
                let state = this.state;
                state.house = data;
                state.isLoading = false;
                this.setState(state);
            })
    }

    handlePayClick(e) {
        const data = {
            id: this.state.house.id,
            owner: this.state.house.owner
        };
        RequestService.postRequest('/auth/pay', data,
            (data) => {
                let state = this.state;
                state.house.phone = data.phone;
                state.house.hasBoughtPhone = data.hasBoughtPhone;
                this.setState(state);
            },
            (error) => {
                let state = this.state;
                state.error = true;
                this.setState(state);
            });
    }

    isRentDealType() {
        return (this.state.house.dealType === DealType.RENTAL);
    }
    isVillaBuildingType() {
        return (this.state.house.buildingType === BuildingType.VILLA);
    }

    render() {
        const house = this.state.house;
        const isLoading = this.state.isLoading;
        const error = this.state.error;


        return (!isLoading) && (
            <section className="container leaf-container">
                <div className="row">
                    <div className="col-md-4 info">
                        {
                            this.isRentDealType() ?
                                (<div className="building-type tag-red">رهن و اجاره</div>) :
                                (<div className="building-type tag-purple">فروش</div>)
                        }

                        <div className="data-container">
                            <div className="data-row">
                                <p className="label">شماره مالک/مشاور</p>
                                <p className="data ltr"><PersianView data={house.phone}/></p>
                            </div>
                            <div className="data-row">
                                <p className="label">نوع ساختمان</p>
                                {
                                    this.isVillaBuildingType() ?
                                        (<p className="data">ویلایی</p>) :
                                        (<p className="data">آپارتمانی</p>)
                                }
                            </div>
                            {
                                this.isRentDealType() ? (
                                        <div>
                                            <div className="data-row">
                                                <p className="label">رهن</p>
                                                <p className="data"><PersianView data={house.price.base}/> تومان</p>
                                            </div>
                                            <div className="data-row">
                                                <p className="label">اجاره</p>
                                                <p className="data"><PersianView data={house.price.rent}/> تومان</p>
                                            </div>
                                        </div>) :
                                    (
                                        <div className="data-row">
                                            <p className="label">خرید</p>
                                            <p className="data"><PersianView data={house.price.sell}/> تومان</p>
                                        </div>
                                    )
                            }
                            <div className="data-row">
                                <p className="label">آدرس</p>
                                <p className="data">{house.address}</p>
                            </div>
                            <div className="data-row">
                                <p className="label">متراژ</p>
                                <p className="data"><PersianView data={house.area}/> مترمربع</p>
                            </div>
                            <div className="data-row">
                                <p className="label">توضیحات</p>
                                <p className="data">{house.description}</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8 left-side">
                        <img src={house.imgURL} alt=""/>
                        {
                            (error) &&
                            <Link to="/account" className="logo">
                                <button className="btn-custom failed" type="submit">اعتبار شما برای مشاهده شماره مالک/مشاور
                                این ملک کافی نیست</button>
                            </Link>
                        }
                        {
                            (!error) &&
                            (!house.hasBoughtPhone) &&
                            <button className="btn-custom" type="submit" onClick={this.handlePayClick}>مشاهده شماره مالک/مشاور</button>
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default HouseInfo;
