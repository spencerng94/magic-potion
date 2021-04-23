import React from 'react';

const FormErrors = (props) => {
    let { formErrors, showErrors, duplicateEmail } = props;

    let matchObject = { 
        validCcNum: "Credit Card Number",
        validEmail: "Email Address",
        validExp: "Credit Card Expiration Date",
        validQuantity: "Potion Quantity",
    }

    let allErrors = formErrors;
    allErrors.duplicateEmail = duplicateEmail;

    if (showErrors) {
        return (
            <div>
                <div className='form-errors-container'>
                    {Object.keys(formErrors).map((fieldName, i) => {
                    let currentField = formErrors[fieldName];
                    console.log(fieldName, 'line 20')
                    if(currentField === false && fieldName !== "duplicateEmail"){
                        return (
                            <div className='error-message'>Error: Invalid {matchObject[fieldName]}.</div>
                        )        
                    } else if (fieldName === "duplicateEmail" && !duplicateEmail) {
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
    } if (duplicateEmail) {

    }
     else {
        return (<div></div>)
    }
}

export default FormErrors;