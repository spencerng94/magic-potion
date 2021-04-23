import React from 'react';

const FormErrors = (props) => {
    let { formErrors, showErrors, duplicateEmail } = props;

    let matchObject = { 
        validCcNum: "Please enter a valid Credit Card Number",
        validEmail: "Please enter a valid Email Address",
        validExp: "Credit card Expiration Date is invalid",
        validQuantity: "Magic potion order may not exceed maximum quantity",
    }

    let allErrors = {};
    let newErrors = Object.assign(allErrors, formErrors);

    allErrors.duplicateEmail = duplicateEmail;

    if (showErrors || duplicateEmail === true) {
        return (
            <div>
                <div className='form-errors-container'>
                    {Object.keys(allErrors).map((fieldName, i) => {
                    let currentField = allErrors[fieldName];
                    if(currentField === false && fieldName !== "duplicateEmail"){
                        return (
                            <div className='error-message'>Error: {matchObject[fieldName]}.</div>
                        )        
                    } else if (fieldName === "duplicateEmail" && currentField === true) {
                        return (
                            <div className='error-message'>Error: An order has already been placed with this email address.</div>
                        )
                    } else {
                        return '';
                    }
                    })}
                </div>
                <div className="errors-bottom"></div>
            </div>
        ) 
    } else {
        return (<div></div>)
    }
}

export default FormErrors;