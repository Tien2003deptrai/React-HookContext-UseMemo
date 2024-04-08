import React, { useState } from 'react'
import Button from './Button';

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

    const handleDecreaseCount = () => {
        setCount(count - 1);
    }

    return (
        <>
            <div className='container mt-5 align-items-center text-center'>
                <div>Chương trình sử dụng state tăng giảm biến đếm</div>
                <h2>Count: {count}</h2>

                <Button onclickFunction={handleIncreaseCount} buttonText={'Tăng'} />

                <Button onclickFunction={handleDecreaseCount} buttonText={'Giảm'} />

            </div>

        </>
    )
}

export default Counter