import React from 'react';

const productsData = [
  {
    id: 1,
    name: 'Bike Helmet',
    price: 49.99,
    image: 'path/to/helmet.jpg', // Update with actual path
    description: 'A comfortable and safe bike helmet.',
  },
  {
    id: 2,
    name: 'Bike Lock',
    price: 29.99,
    image: 'path/to/lock.jpg', // Update with actual path
    description: 'A sturdy bike lock to keep your bike secure.',
  },
  {
    id: 3,
    name: 'Bike Light',
    price: 19.99,
    image: 'path/to/light.jpg', // Update with actual path
    description: 'Bright LED lights for night riding.',
  },
  {
    id: 4,
    name: 'Water Bottle',
    price: 12.99,
    image: 'path/to/bottle.jpg', // Update with actual path
    description: 'Stay hydrated while riding.',
  },
];

const BikeAccessories = ({ addToCart }) => {
  return (
    <div className="product-list">
      {productsData.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default BikeAccessories;
