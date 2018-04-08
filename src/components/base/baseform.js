import React from 'react';
import { Component } from 'react';
import NumberService from "../../services/number";


class BaseForm extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handlePriceNumberChange = this.handlePriceNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            formData: {}
        };
    }

    isEmpty(data) {
         return data.toString().trim().length === 0;
    }

    handleNumberChange(event) {
        let value = event.target.value;
        if(value) {
            let persianValue = NumberService.toPersian(value);
            if (NumberService.isPersianNumber(persianValue)) {
                let state = this.state;
                state.formData[event.target.name] = persianValue;
                this.setState({formData: state.formData});
            }
        } else {
            let state = this.state;
            state.formData[event.target.name] = "";
            this.setState({formData: state.formData});
        }
    }

    handlePriceNumberChange(event) {
        let value = event.target.value;
        if(value) {
            let persianValue = NumberService.toPersian(value);
            if (NumberService.isPersianNumber(persianValue)) {
                let state = this.state;
                state.formData.price[event.target.name] = persianValue;
                this.setState({formData: state.formData});
            }
        } else {
            let state = this.state;
            state.formData.price[event.target.name] = "";
            this.setState({formData: state.formData});
        }
    }

    handleChange(event) {
        let state = this.state;
        state.formData[event.target.name] = event.target.value;
        this.setState({formData: state.formData});
    }

    handleSubmit(e) {
        e.preventDefault();
    }
}

export default BaseForm;

