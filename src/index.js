import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/ThemContext';
import { ProductsContextProvider } from './context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

// global
