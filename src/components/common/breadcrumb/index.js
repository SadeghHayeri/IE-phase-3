import React, { Component } from 'react';
import './style.scss';

class BreadCrumb extends Component {

    render() {
        return (
            <div className="breadcrumb">
                <section className="container bigger-container">
                    <h1><b>{this.props.title}</b></h1>
                </section>
            </div>
        );
    }
}

export default BreadCrumb;

