import React from 'react';

const Order = () => {

    return (
        <div>
            <div className="section-title">Your Order</div>
            <div className="order-details-container">
                <div className="quantity-container">
                    <div className="quantity-label">Qty<span>*</span></div>
                    <input type="text" id="fname" name="firstname" placeholder="Max 3"></input>
                </div>
                <div className="price-container">
                    <div className="input-label">Total Price</div>
                    <input type="text" id="fname" name="firstname" placeholder="0.00"></input>
                </div>
            </div>
        </div>
    )
}

export default Order;