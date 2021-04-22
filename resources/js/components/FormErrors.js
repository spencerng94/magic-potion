import React from 'react';

const FormErrors = (props) => {
    let { formErrors, showErrors } = props;

    let matchObject = { 
        validCcNum: "Credit Card Number",
        validEmail: "Email Address",
        validExp: "Credit Card Expiration Date",
        validQuantity: "Potion Quantity"
    }

    if (showErrors) {
        return (
            <div>
                <div className='form-errors-container'>
                    {Object.keys(formErrors).map((fieldName, i) => {
                    let currentField = formErrors[fieldName];
                    console.log(fieldName, 'line 20')
                    if(currentField === false){
                        return (
                            <div className='error-message'>Error: Invalid {matchObject[fieldName]}.</div>
                        // <p key={i}>{fieldName} {formErrors[fieldName]}</p>
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