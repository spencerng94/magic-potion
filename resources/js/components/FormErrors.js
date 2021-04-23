import React from 'react';

const FormErrors = (props) => {
    let { formErrors, showErrors, duplicateEmail } = props;

    let matchObject = { 
        validCcNum: "Please enter a valid Credit Card Number",
        validEmail: "Please enter a valid Email Address",
        validExp: "Credit card Expiration Date is invalid",
        validQuantity: "Magic potion order may not exceed maximum quantity",
    }

    let allErrors = formErrors;
    allErrors.duplicateEmail = duplicateEmail;

    console.log('line 16', allErrors);

    if (showErrors || duplicateEmail === true) {
        return (
            <div>
                <div className='form-errors-container'>
                    {Object.keys(formErrors).map((fieldName, i) => {
                    let currentField = formErrors[fieldName];
                    console.log(fieldName, typeof(currentField), 'line 24')
                    if(currentField === false && fieldName !== "duplicateEmail"){
                        return (
                            <div className='error-message'>Error: {matchObject[fieldName]}.</div>
                        )        
                    } 
                    if (fieldName === "duplicateEmail" && currentField === true) {
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