import React, { Component } from 'react';
import PersianView from '../../common/persian-view'

import './style.scss'
import {Link} from "react-router-dom";
import { BuildingType, DealType } from '../../../services/enums'

class House extends Component {
    isRentDealType() {
        return (this.props.item.dealType === DealType.RENTAL);
    }

    render() {
        return (
            <Link to={"/house/" + this.props.item.owner + "/" + this.props.item.id} className="item base-card light-condensed-card">
                {
                    (this.isRentDealType()) ?
                        (<span className="building-type tag-red">رهن و اجاره</span>) :
                        (<span className="building-type tag-purple">فروش</span>)
                }
                <div className="image-container">
                    <img src={this.props.item.imgPath} alt=""/>
                </div>
                <div className="row item-detail">
                    <div className="col-md-8"><PersianView data={this.props.item.area}/><span className="unit">متر مربع</span></div>
                    <div className="col-md-4">
                        {
                            (this.isRentDealType()) ?
                                (<i className="fas fa-map-marker-alt red-content"></i>) :
                                (<i className="fas fa-map-marker-alt purple-content"></i>)
                        }
                        {this.props.item.location.name}
                    </div>
                    <hr/>
                    {
                        (this.isRentDealType()) ?
                            (
                                <div className="col-md-12 no-margin">
                                    <div className="col-md-6">
                                        <span className="data-title">رهن</span>
                                        <span className="price">
                                            <PersianView data={this.props.item.price.base}/>
                                            <span className="unit">تومان</span>
                                        </span>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="data-title">اجاره</span>
                                        <span className="price">
                                            <PersianView data={this.props.item.price.rent}/>
                                            <span className="unit">تومان</span>
                                        </span>
                                    </div>
                                </div>
                            ) :
                            (
                                <div className="col-md-6">
                                    <span className="data-title">قیمت</span>
                                    <span className="price">
                                        <PersianView data={this.props.item.price.sell}/>
                                        <span className="unit">تومان</span>
                                    </span>
                                </div>
                            )
                    }
                </div>
            </Link>
        );
    }
}

export default House;
