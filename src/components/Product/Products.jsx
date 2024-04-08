import React, { useMemo, useState } from 'react';
// hooks
import ListProduct from './ListProduct';
// 
import { useThemeContext } from '../../context/ThemContext';
import { useProductContext } from '../../context/ProductContext';
// 

const Products = () => {
    const { theme } = useThemeContext();
    const { products } = useProductContext();

    const memoizedValue = useMemo(() => {
        const totalCost = products.reduce((sum, product) => sum + product.price, 0);
        const sortedCost = products.sort((a, b) => a.price - b.price);
        return { totalCost, sortedCost };
    }, [products]);

    const { totalCost, sortedCost } = memoizedValue;

    return (
        <>
            <div className='text-center'>
                <h1>${totalCost}</h1>
            </div>
            <div style={{ background: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff' }}>
                <ListProduct products={sortedCost} />
            </div>
        </>
    )
}

export default Products