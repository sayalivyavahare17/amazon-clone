import React from 'react';
import { useLocation } from 'react-router-dom'; 

const Checkout = () => {
  const navigate = useLocation(); 

  const handlePayment = () => {
    const success = Math.random() > 0.5; 
    navigate(`/payment-result/${success ? "success" : "failure"}`); 
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;