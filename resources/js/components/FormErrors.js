import React from 'react';

const FormErrors = (props) => {
    let { formErrors, showErrors } = props;

    let matchObject = { 
        validCcNum: "Credit Card Number",
        validEmail: "Email Address",
        validExp: "Credit Card Expiration Date",
        validQuantity: "Potion Quantity"
    }

    console.log(showErrors, 'line 13')

    if (showErrors) {
        return (
            <div className='form-errors'>
                {Object.keys(formErrors).map((fieldName, i) => {
                let currentField = formErrors[fieldName];
                console.log(fieldName, 'line 20')
                if(currentField === false){
                    return (
                        <div>Error: Please enter a valid {matchObject[fieldName]}.</div>
                    // <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                    )        
                } else {
                    return '';
                }
                })}
            </div>
        ) 
    } else {
        return (<div></div>)
    }
}

export default FormErrors;