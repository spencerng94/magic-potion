import React from 'react';

const FormErrors = (props) => {
    let { formErrors } = props;
    
    return (
        <div className='formErrors'>
            {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )        
            } else {
                return '';
            }
            })}
        </div>
    )
}

export default FormErrors;