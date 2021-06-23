import React, { useEffect, useContext } from 'react';
import ProductItem from '../ProductItem';
import ProductContext from '../../context/products/productContext';
const Home = () => {
  const productContext = useContext(ProductContext);
  const { products, loading, listAllProducts } = productContext;

  useEffect(() => {
    listAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='wrapper'>
      {loading ? (
        <h1 style={{ textAlign: 'center' }}>loading...</h1>
      ) : (
        <ProductItem products={products} />
      )}
    </div>
  );
};

export default Home;
