import React from 'react';
import '.././App.css';

function Button({ text, onClick, className }) {
    return(
        <div>
            <button className={`default-styles ${className}`} onClick={onClick}>
                {text}
            </button>
        </div>
    );
}

export default Button;