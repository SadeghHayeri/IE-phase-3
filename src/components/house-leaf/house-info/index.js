import React, { Component } from 'react';
import {BuildingType, DealType} from "../../../services/enums";


class HouseInfo extends Component {
    isRentDealType() {
        return (this.props.item.dealType === DealType.RENTAL);
    }
    isVillaBuildingType() {
        return (this.props.item.buildingType === BuildingType.VILLA);
    }

    render() {
        return (
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
                                <p className="data ltr">{this.props.item.phoneNumber}</p>
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
                                            <p className="data">{this.props.item.price.base} تومان</p>
                                        </div>
                                        <div className="data-row">
                                            <p className="label">اجاره</p>
                                            <p className="data">{this.props.item.price.rent} تومان</p>
                                        </div>
                                    </div>) :
                                    (
                                        <div className="data-row">
                                            <p className="label">خرید</p>
                                            <p className="data">{this.props.item.price.sell} تومان</p>
                                        </div>
                                    )
                            }
                            <div className="data-row">
                                <p className="label">آدرس</p>
                                <p className="data">{this.props.item.location.name}</p>
                            </div>
                            <div className="data-row">
                                <p className="label">متراژ</p>
                                <p className="data">{this.props.item.area} مترمربع</p>
                            </div>
                            <div className="data-row">
                                <p className="label">توضیحات</p>
                                <p className="data">{this.props.item.description}</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8 left-side">
                        <img src={this.props.item.imgPath} alt=""/>
                        {
                            (!this.props.item.hasBoughtPhoneNumber) &&
                            <button type="submit">مشاهده شماره مالک/مشاور</button>
                        }
                        {/*<button className="failed" type="submit">اعتبار شما برای مشاهده شماره مالک/مشاور این ملک کافی نیست</button>*/}
                    </div>
                </div>
            </section>
        );
    }
}

export default HouseInfo;
