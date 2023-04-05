import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { CartProvider } from './cart-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AppProvider>
  </React.StrictMode>
);
