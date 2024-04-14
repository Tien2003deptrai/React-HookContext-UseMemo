import React, { useMemo } from 'react';
// hooks
import ListProduct from './ListProduct';
// 
import { useThemeContext } from '../../context/ThemContext';
import { useProductContext } from '../../context/ProductContext';
// 

const Products = () => {
    const { theme } = useThemeContext();
    const { products } = useProductContext();

    // take note : lưu trữ (giá trị để tính toán) - tối ưu hoá hiệu xuất tránh tính toán các giá trị không cần thiết
    // arr[i]
    // const totalCost1 = products.reduce((sum, product) => sum + product.price, 0);

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