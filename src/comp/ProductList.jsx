import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    fetch('/data/local.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to product detail page
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.slice(0, visibleCount).map(product => (
          <li key={product.id} onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>₹{product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
      {visibleCount < products.length && (
        <button className="show-more" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default ProductList;
