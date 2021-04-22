import React from 'react';

const FormSuccess = (props) => {
    let { showSuccess } = props;

    if (showSuccess) {
        return(
            <div>
                <div className="success-container">
                    <div className="form-success">
                        Congratulations! Your Order has been placed!
                    </div>
                </div>
                <div className="success-bottom"></div>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default FormSuccess;