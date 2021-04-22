import React from 'react';

const Billing = (props) => {
    let { handleCreditCardChange, ccNum, handleExpirationChange, exp, isInputNumber } = props;

    const numberCheck = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }

    return (
        <div>
            <div className="section-title">Billing Information</div>
            <div className="billing-details-container">
                <div className="credit-card-container">
                    <div className="input-label">Credit Card Number</div>
                    <input type="text" onKeyPress={numberCheck} maxlength="19" value={ccNum} onChange={handleCreditCardChange} id="fname" name="firstname" placeholder="Credit Card Number"></input>
                </div>
                <div className="expiration-container">
                    <div className="input-label">Expiration Date</div>
                    <div>
                        <input type="text" onKeyPress={numberCheck} value={exp} onChange={handleExpirationChange} className="expiration-input" maxlength="5" id="fname" placeholder="mm/yy"></input>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Billing;