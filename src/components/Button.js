import React from 'react';
import "../App.css";

const Button = ({ onClick, disabled, type, style, ...props }) => {
    
    
    return (
        <button
            labelcolor = 'white'
            type="button"
            disabled={disabled}
            onClick={onClick}
            className="btn"
        >
            {props.txt}
        </button>
    );
};

export default Button;