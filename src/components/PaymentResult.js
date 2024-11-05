import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PaymentResult = () => {
  const { status } = useParams();

  return (
    <div>
      <h1>{status === 'success' ? 'Payment Successful' : 'Payment Failed'}</h1>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default PaymentResult;