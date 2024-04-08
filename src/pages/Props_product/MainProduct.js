import React, { useState } from 'react'
import ProductList from './ProductList'

const products = [
    {
        name: 'Aos polo',
        price: 100,
        desc: 'Ao thun polo thuong hieu mat me'
    },
    {
        name: 'Aos polo 213',
        price: 200,
        desc: 'Ao thun polo thuong hieu mat me'
    },
    {
        name: 'Aos polo 221',
        price: 3000,
        desc: 'Ao thun polo thuong hieu mat me'
    }
]

const MainProduct = () => {

    return (
        <>
            <ProductList products={products} />
        </>
    )
}

export default MainProduct