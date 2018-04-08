import React, { Component } from 'react';
import NumberService from "../../../services/number";

class PersianView extends Component {

    render() {
        return (
            <span>{NumberService.toPersian(this.props.data)}</span>
        );
    }
}

export default PersianView;