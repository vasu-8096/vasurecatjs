import React from 'react';
import './CartPage.css'; // Import your CSS file

const CartPage = ({ cart }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
              <div>
                <strong>{item.name}</strong> - ₹{item.price}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
