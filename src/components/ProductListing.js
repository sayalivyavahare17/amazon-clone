import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api/mockApi';
import './ProductListing.css'; 

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleBuyNow = (product) => {
    console.log("Buying product:", product);
  };

  return (
    <div className="product-listing">
      <h1>Product Listing</h1>
      <div className="product-cards">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h2><strong>{product.name}</strong></h2>
              <p>Price: ${product.price}</p>
            </Link>
            <div className="buy-now-box">
              <button onClick={() => handleBuyNow(product)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
