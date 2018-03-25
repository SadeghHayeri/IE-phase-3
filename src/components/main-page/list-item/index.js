import React, { Component } from 'react';
import "./style.scss"

class ListItem extends Component {
    render() {

        const listItems = this.props.items.map(
            (itemText, index) => (<li key={index}><i className="fas fa-check-circle ticks"></i> {itemText} </li>)
        );

        return (
            <section className="container about">
                <div className="row">
                    <div className="info col-md-7 col-sm-12">
                        <h2>{this.props.title}</h2>
                        <ul>
                            {listItems}
                        </ul>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <img src={this.props.img} alt="" />
                    </div>
                </div>
            </section>
        );
    }
}

export default ListItem;
