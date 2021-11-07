import React from 'react';
import "../App.css";

const Button = ({ children, onClick, disabled, type, style, ...props }) => {
    
    
    return (
        <button
            labelcolor = 'white'
            type="button"
            onClick={

                    !disabled ? onClick :
                    () => {}
            }
            className="btn"
        >
            {children || props.txt}
        </button>
    );
};

export default Button;