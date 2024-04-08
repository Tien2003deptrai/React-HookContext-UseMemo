import React from 'react'
import Product from './Product'

const ProductList = ({ products }) => {
    return (
        <>
            <h2>Danh sach san pham</h2>
            <div className='row'>
                <div className='col'>
                    {
                        products.map((product, index) => (
                            <Product
                                key={index}
                                name={product.name}
                                price={product.price}
                                desc={product.desc}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProductList