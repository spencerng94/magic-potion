import React from 'react';

const Submit = (props) => {
    let { handleSubmit } = props;

    return(
        <div className="button-container">
            <button onClick={handleSubmit} type="button">PLACE YOUR ORDER</button>
        </div>
    )
}

export default Submit;