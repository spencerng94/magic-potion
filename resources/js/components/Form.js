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
            quantity = 0,
            total = 0,
            email = '',
            ccNum = '',
            exp = ''
        }
    }

    render() {
        return (
            <div>
                <div><Header /></div>
                <div><Order /></div>
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