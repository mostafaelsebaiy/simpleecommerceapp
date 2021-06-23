import React, { useContext } from 'react';
import './productItem.css';
import ProductContext from '../context/products/productContext';
const ProductItem = ({ products }) => {
  const productContext = useContext(ProductContext);
  const { addToCard } = productContext;

  const addProduct = (productId) => {
    addToCard(productId);
  };
  return (
    <div>
      <h1 className='home_header'> products available now</h1>
      {products.map((product) => (
        <div className='productItem' key={product.id}>
          <h1 className='product_title'>{product.title}</h1>
          <img
            className='product_image'
            src={product.image}
            alt={product.name}
          />
          <p>
            <strong>Price:$</strong>
            {product.price}
          </p>
          <button onClick={() => addProduct(product.id)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
