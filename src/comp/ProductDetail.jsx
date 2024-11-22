import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/data/local.json') 
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(item => item.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); 
      alert(`${product.name} added to cart!`); 
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <div className="detail-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
