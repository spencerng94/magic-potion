import React from 'react';

const Submit = (props) => {
    let { state } = props;

    console.log(state, 'line 6')

    return(
        <div className="button-container">
            <button type="button">PLACE YOUR ORDER</button>
        </div>
    )
}

export default Submit;