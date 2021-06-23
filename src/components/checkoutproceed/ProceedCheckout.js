import React from 'react';

const ProceedCheckout = ({ closeCheckout, closeCheckoutWithMessage }) => {
  return (
    <div className='checkmodel'>
      <h2>click yes if you want to continue </h2>
      <div className='checkmodel_button'>
        <button onClick={closeCheckoutWithMessage}>yes</button>
        <button onClick={closeCheckout}>no</button>
      </div>
    </div>
  );
};

export default ProceedCheckout;
