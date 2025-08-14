import React from 'react';
import '.././App.css';

function Button({ text, onClick, className }) {
    console.log('Button rendered')
    return(
        <div>
            <button className={`default-styles ${className}`} onClick={onClick}>
                {text}
            </button>
        </div>
    );
}

export default Button;