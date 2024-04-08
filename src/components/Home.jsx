import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Products from './Product/Products'
import TestMUI from './TestMUI'

const Home = () => {
    return (
        <>
            <Header />

            <TestMUI />

            <Products />

            <Footer />
        </>
    )
}

export default Home