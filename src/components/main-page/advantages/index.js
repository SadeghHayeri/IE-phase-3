import React, { Component } from 'react';


class Advantages extends Component {
    render() {

        const items = this.props.items.map(
            (item, index) => (
                <div className="col-md-4" key={index}>
                    <div className="item base-card light-card">
                        <img src={item.img} alt=""/>
                        <h6 className="title">{item.title}</h6>
                        <span className="motto">{item.motto}</span>
                    </div>
                </div>
            )
        );

        return (
            <section className="container">
                <div className="row box-items">
                    {items}
                </div>
            </section>
        );
    }
}

export default Advantages;
