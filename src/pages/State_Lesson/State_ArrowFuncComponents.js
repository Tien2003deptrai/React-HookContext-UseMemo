import React, { useState } from 'react'

const State_ArrowFuncComponents = () => {

    const [person, setPerson] = useState({
        name: 'person',
        age: '12',
        salary: 100
    })

    return (
        <>
            <div className='container mt-5 align-items-center text-center'>
                <div>Chương trình sử dụng state thay đổi person</div>
                <h2>{person.name}</h2>
                <h2>{person.age}</h2>
                <h2>{person.salary}</h2>

                <button>Thay đổi</button>
            </div>

        </>
    )
}

export default State_ArrowFuncComponents