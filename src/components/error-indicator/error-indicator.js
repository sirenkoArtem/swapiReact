import React from 'react';
import './error-indicator.scss';
import icon from  './error-image.png';

const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <p className="boom">BOOM!</p>
            <span>Something's wrong </span>
            <span>
                (but we've already sent droids to fix it)
            </span>
        </div>
    )
};

export default ErrorIndicator;