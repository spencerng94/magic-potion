import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Order from './Order';
import Divider from './Divider';
import Contact from './Contact';
import Billing from './Billing';
import Submit from './Submit';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            total: '',
            email: '',
            ccNum: '',
            exp: '',
            validEmail: false,
            dateSlash: false
        }
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
        this.handleExpirationChange = this.handleExpirationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleCreditCardChange(event) {
        this.setState({
            ccNum: event.target.value
        })
    }

    handleExpirationChange(event) {
        const val = event.target.value;
        let currentLength = val.length;

        if (currentLength === 3 && !this.state.dateSlash && !val.includes('/')) {
            const dateWithSlash = val.substring(0, 2) + '/' + val.substring(2, 4);
            this.setState({
                exp: dateWithSlash,
                dateSlash: true
            })
        } else {
            this.setState({
                exp: event.target.value,
                dateSlash: false
            })
        }
    }


    handleEmailChange(event) {
        let regex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(event.target.value);
        console.log(regex, 'line 38');
        if (regex) {
            this.setState({
                email: event.target.value, 
                validEmail: true
            })
        } else {
            this.setState({
                validEmail: false
            })
        }
    }

    handleSubmit(event) {
        console.log('line 83')
        event.preventDefault();

        let payload = {
            email: this.state.email,
            quantity: parseInt(this.state.quantity),
            total: this.state.total,
            payment: {
                ccNum: this.state.ccNum,
                exp: this.state.exp
            }
        }

        axios.post('api/magic', payload)
            .then(function (response) {
                console.log(response.data, 'line 98');
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log('made it to 104')

    }

    render() {
        return (
            <div className="master-container">
                <div><Header /></div>
                <div><Order quantity={this.state.quantity} total={this.state.total} handleQuantityChange={this.handleQuantityChange}/></div>
                <div><Divider /></div>
                <div><Contact email={this.state.email} handleEmailChange={this.handleEmailChange}/></div>
                <div><Divider /></div>
                <div><Billing ccNum={this.state.ccNum} handleCreditCardChange={this.handleCreditCardChange} exp={this.state.exp} handleExpirationChange={this.handleExpirationChange} dateSlash={this.state.dateSlash}/></div>
                <div><Divider /></div>
                <div><Submit state={this.state} handleSubmit={this.handleSubmit}/></div>
            </div>
        );
    }
}

export default Form;

// DOM element
if (document.getElementById('form')) {
    ReactDOM.render(<Form />, document.getElementById('form'));
}