import React from 'react'

const Product = ({ name, price, desc }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{desc}</p>
        </div>
    )
}

export default Product