import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './comp/Sidebar';
import Header from './comp/Header';
import ProductList from './comp/ProductList';
import ProductDetail from './comp/ProductDetail';
import CartPage from './comp/CartPage'; // Import your CartPage component

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]); // Add the product to the cart
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Header cartCount={cart.length} />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} />} />
   
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
