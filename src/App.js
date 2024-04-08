import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './components/Home';
// import ProductDetail from './components/Product/ProductDetail';


const Home = lazy(() => import('./components/Home'))
const ProductDetail = lazy(() => import('./components/Product/ProductDetail'))


// 'react-router-dom'
// BrowserRouter : container : chứa toàn bộ các route url
// Routes : định nghĩa tất cả các route trong ứng dụng
// Route : nó chứa mỗi url cụ thể

// get id, update, delete

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
