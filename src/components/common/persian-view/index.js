import React, { Component } from 'react';
import persianJs from 'persianjs'

class PersianView extends Component {

    render() {
        return (
            <span>{persianJs(this.props.data.toString()).arabicChar().englishNumber().arabicNumber().toString()}</span>
        );
    }
}

export default PersianView;