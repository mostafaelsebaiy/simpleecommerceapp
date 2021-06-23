import React, { useState, useContext } from 'react';
import ProductContext from '../../context/products/productContext';
import '../productItem.css';
import ProceedCheckout from '../checkoutproceed/ProceedCheckout';
const Cart = () => {
  const productContext = useContext(ProductContext);
  const { cartItems, loading, deleteFromCart } = productContext;

  const removeProduct = (id) => {
    deleteFromCart(id);
  };
  const [showcheCkout, setShowCheckout] = useState(false);
  const [message, setMessage] = useState('');
  const CheckoutToProceed = () => {
    setShowCheckout(true);
  };
  const closeCheckout = () => {
    setShowCheckout(false);
  };
  const closeCheckoutWithMessage = () => {
    setShowCheckout(false);
    setMessage('Done,Thank You ');
  };
  let totalPTice = +cartItems.reduce((acc, item) => acc + item.price * 1, 0);
  return (
    <div className='wrapper'>
      {loading ? (
        <h1>loading</h1>
      ) : cartItems && cartItems.length > 0 ? (
        <div>
          <div className='cart_title'>
            <h1>Your Cart</h1>
            <h1>total price:${totalPTice.toFixed(2)} </h1>
            {message ? (
              <h1 style={{ color: 'green' }}>{message}</h1>
            ) : (
              <button onClick={CheckoutToProceed}>proceed to checkout</button>
            )}

            {showcheCkout && (
              <ProceedCheckout
                closeCheckout={() => closeCheckout()}
                closeCheckoutWithMessage={() => closeCheckoutWithMessage()}
              />
            )}
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className='cartitem'>
              <h1>
                <strong>Name:</strong>
                {item.title}
              </h1>
              <p>
                <strong>Price:$</strong>
                {item.price}
              </p>
              <button onClick={() => removeProduct(item.id)}>delete</button>
            </div>
          ))}
        </div>
      ) : (
        <h1 style={{ textAlign: 'center' }}>No Products in cart</h1>
      )}
    </div>
  );
};

export default Cart;
