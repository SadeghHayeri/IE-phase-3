import React, { Component } from 'react';
import House from "../house";

import "./style.scss";

class HouseList extends Component {
    render() {
        const items = this.props.items.map(
            (item, index) => (
                <div className="col-md-6" key={index} >
                    <House item={item}/>
                </div>
            )
        );

        return (
            <section className="container">
                <h3 className="gray-content search-header">
                    برای مشاهده اطلاعات بیشتر درباره‌ی هر ملک روی آن کلیک کنید
                </h3>
                <div className="row search-container">
                    {items}
                </div>
            </section>
        );
    }
}

export default HouseList;
