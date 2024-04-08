import React from 'react'

const Button = ({ onclickFunction, buttonText }) => {
    return (
        <button onClick={onclickFunction}
            className='btn btn-warning'
        >
            {buttonText}
        </button>
    )
}

export default Button