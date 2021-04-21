import React from 'react';

const Header = () => {

    return (
        <div>
            <div className="form-title">
                Magic Potion #1
            </div>
            <div className="image-container">
                <img src="https://magic-potion-bucket.s3-us-west-1.amazonaws.com/magic-potion-photo.png" className="potion-photo"/>
            </div>
        </div>
    )
}

export default Header;