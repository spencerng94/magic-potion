import React from 'react';

const Contact = (props) => {
    let { email, handleEmailChange } = props;

    console.log(email, 'line 7')

    return (
        <div>
            <div className="section-title">Contact</div>
            <div className="input-label">Email Address</div>
            <input type="text" id="fname" name="firstname" onChange={handleEmailChange} value={email} placeholder="Email Address"></input>
        </div>
    )
}

export default Contact;