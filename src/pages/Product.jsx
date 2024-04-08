import React from 'react'
import Card1 from '../Asset/card1.jpg'

const Product = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col col-md-3'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={Card1} className="card-img-top" alt="..." style={{ width: '17rem' }} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product