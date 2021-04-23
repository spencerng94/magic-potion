import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Order from './Order';
import Divider from './Divider';
import Contact from './Contact';
import Billing from './Billing';
import Submit from './Submit';
import FormErrors from './FormErrors';
import FormSuccess from './FormSuccess';
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
            dateSlash: false,
            formErrors: {validQuantity: false, validEmail: false, validCcNum: false, validExp: false},
            showErrors: '',
            showSuccess: '',
            duplicateEmail: ''
        }
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
        this.handleExpirationChange = this.handleExpirationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateField = this.validateField.bind(this);
        this.checkDuplicate = this.checkDuplicate.bind(this);
        this.magicPost = this.magicPost.bind(this);
    }

    handleQuantityChange(event) {
        let quantity = event.target.value;
        if (quantity > 3) {
            alert('Error: Maximum of 3 potions allowed for each purchase.');
        } else {
            let currentTotal = event.target.value * 49.99;
            let field = "quantity";
            this.setState({
                quantity: event.target.value,
                total: currentTotal
            });
            this.validateField(field, quantity);
        }
    }

    handleCreditCardChange(e) {
        let field = "ccNum";
        let ccNum = e.target.value;
        this.setState({ccNum: e.target.value});
        this.validateField(field, ccNum);
    }

    handleExpirationChange(event) {
        const val = event.target.value;
        let field = "exp";
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
        this.validateField(field, val);
    }

    handleEmailChange(event) {
        let field = "email";
        let email = event.target.value;
        this.setState({
            email: email, 
            validEmail: true
        })
        this.validateField(field, email)
    }

    async checkDuplicate(currentEmail, showErrors) {
        console.log(showErrors, 'line 92')

        await axios.get(`/api/duplicate/${currentEmail}`)
            .then((res) => { 
                console.log(res.data, 'line 120');
                this.setState({
                    duplicateEmail: res.data
                })
            })
            .then(() => {
                console.log(this.state.duplicateEmail, 'line 102')
                if (!this.state.showErrors && this.state.duplicateEmail === false) {
                    this.magicPost();
                }
            })
            .catch((error) => {
                console.log(error, 'line 123');
            })

    }

    async magicPost() {
        let payload = {
            email: this.state.email,
            quantity: parseInt(this.state.quantity),
            total: this.state.total,
            payment: {
                ccNum: this.state.ccNum,
                exp: this.state.exp
            }
        }

        console.log(payload, 'line 124')

        await axios.post('/api/magic', payload)
            .then((res) => {
                this.setState({
                    showSuccess: true, 
                    showErrors: false,
                    quantity: '',
                    total: '',
                    email: '',
                    ccNum: '',
                    exp: ''
                })
            })
            .catch(function (error) {
                console.log(error, 'line 139')
                return error;
            });
        }

    handleSubmit(event) {
        event.preventDefault();

        let showErrors = '';
        let duplicateEmail = '';
        let formErrors = this.state.formErrors;

        for (let input in formErrors) {
            if (formErrors[input] === false) {
                showErrors = true;
            }
        }

        if (showErrors) {
            this.setState({
                showErrors: true
            })
        }

        // GET request for email address
            // if it exists, set duplicateEmail = true
            // TODO: put in duplicateEmail into formErrors for state and handle mapping w/ if else 
        
        let currentEmail = this.state.email;

        if (this.state.formErrors.validEmail === true && !showErrors) {
            this.checkDuplicate(currentEmail, showErrors);
        }

        // if (!showErrors && this.state.duplicateEmail === false) {
        //     this.magicPost();
        // }

        console.log(this.state, 'line 143')

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
    
        switch(fieldName) {
            case 'ccNum':
                let ccNumRegex = new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/g).test(value);
                fieldValidationErrors.validCcNum = ccNumRegex ? true : false;
            break;
            case 'email':
                let emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(value);
                fieldValidationErrors.validEmail = emailRegex ? true : false;
            break;
            case 'quantity':
                let maximum = 3;
                let minimum = 0;
                if (value > maximum || value <= minimum) {
                    fieldValidationErrors.validQuantity = false;
                } else {
                    fieldValidationErrors.validQuantity = true;
                }
            break;
            case 'exp':
                let expRegex = new RegExp(/^(0[1-9]|1[0-2])\/\d{2}$/).test(value);
                fieldValidationErrors.validExp = expRegex ? true : false;
            break;
          default:
            break;
        }
        this.setState({
            formErrors: fieldValidationErrors
        })
      }

    render() {
        return (
            <div className="master-container">
                <div><Header /></div>
                <div><FormErrors formErrors={this.state.formErrors} showErrors={this.state.showErrors} duplicateEmail={this.state.duplicateEmail}/></div>
                <div><FormSuccess showSuccess={this.state.showSuccess}/></div>
                <div><Order quantity={this.state.quantity} total={this.state.total} handleQuantityChange={this.handleQuantityChange}/></div>
                <div><Divider /></div>
                <div><Contact email={this.state.email} handleEmailChange={this.handleEmailChange}/></div>
                <div><Divider /></div>
                <div><Billing ccNum={this.state.ccNum} handleCreditCardChange={this.handleCreditCardChange} exp={this.state.exp} handleExpirationChange={this.handleExpirationChange} dateSlash={this.state.dateSlash}
                /></div>
                <div><Divider /></div>
                <div><Submit handleSubmit={this.handleSubmit}/></div>
            </div>
        );
    }
}

export default Form;

// DOM element
if (document.getElementById('form')) {
    ReactDOM.render(<Form />, document.getElementById('form'));
}