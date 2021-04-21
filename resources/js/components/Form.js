import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Order from './Order';
import Divider from './Divider';
import Contact from './Contact';
import Billing from './Billing';
import Submit from './Submit';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            total: '',
            email: '',
            ccNum: '',
            exp: ''
        }
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    handleQuantityChange(event) {
        if (event.target.value > 3) {
            alert('Error: Maximum of 3 potions allowed for each purchase.');
        } else {
            let currentTotal = event.target.value * 49.99;
            this.setState({
                quantity: event.target.value,
                total: currentTotal
            });
        }
    }

    render() {
        return (
            <div className="master-container">
                <div><Header /></div>
                <div><Order quantity={this.state.quantity} total={this.state.total} handleQuantityChange={this.handleQuantityChange}/></div>
                <div><Divider /></div>
                <div><Contact /></div>
                <div><Divider /></div>
                <div><Billing /></div>
                <div><Divider /></div>
                <div><Submit /></div>
            </div>
        );
    }
}

export default Form;

// DOM element
if (document.getElementById('form')) {
    ReactDOM.render(<Form />, document.getElementById('form'));
}