import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Import the CSS file for styling

const Homepage = () => (
  <div className="homepage">
    <div className="hero">
      <h1>Welcome to the E-Commerce Site</h1>
      <p>Discover a wide range of products at amazing prices!</p>
      <Link to="/products" className="view-products-button">View Products</Link>
    </div>
  </div>
);

export default Homepage;
