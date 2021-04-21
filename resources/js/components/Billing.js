import React from 'react';

const Billing = () => {

    return (
        <div>
            <div className="section-title">Billing Information</div>
            <div className="billing-details-container">
                <div className="credit-card-container">
                    <div className="input-label">Credit Card Number</div>
                    <input type="text" id="fname" name="firstname" placeholder="Credit Card Number"></input>
                </div>
                <div className="expiration-container">
                    <div className="input-label">Expiration Date</div>
                    <div>
                        <input type="text" className="expiration-input" id="fname" placeholder="mm/yy"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing;