import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../../context/products/productContext';
import './header.css';

const Header = () => {
  const productContext = useContext(ProductContext);
  const { cartItems } = productContext;
  return (
    <div className='header'>
      <ul>
        <li>
          <Link to='/' className='navitem'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/cart' className='navitem'>
            Cart
          </Link>
        </li>
        <div className='counter'>
          <div>{cartItems.length > 0 ? cartItems.length : 0}</div>
        </div>
      </ul>
    </div>
  );
};

export default Header;
