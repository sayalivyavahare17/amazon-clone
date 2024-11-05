import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import
import Homepage from './components/Homepage';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import PaymentResult from './components/PaymentResult';

const App = () => (
  <Router>
    <Routes> {/* Change Switch to Routes */}
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment-result/:status" element={<PaymentResult />} />
    </Routes>
  </Router>
);

export default App;