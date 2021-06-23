import React, { useReducer } from 'react';
import axios from 'axios';
import productContext from './productContext';
import productReducer from './productReducer';
import {
  GET_PRODUCTS,
  SET_LOADING,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from '../types';

const ProductState = (props) => {
  const initialState = {
    products: [],
    product: {},
    cartItems: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const listAllProducts = async () => {
    setLoading();

    const res = await axios.get('https://fakestoreapi.com/products');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  };

  const addToCard = async (productId) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );

    dispatch({
      type: ADD_TO_CART,
      payload: res.data,
    });
  };

  const deleteFromCart = async (productId) => {
    await axios.delete(`https://fakestoreapi.com/products/${productId}`);

    dispatch({
      type: DELETE_FROM_CART,
      payload: productId,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <productContext.Provider
      value={{
        products: state.products,
        product: state.product,
        cartItems: state.cartItems,
        loading: state.loading,
        listAllProducts,
        setLoading,
        addToCard,
        deleteFromCart,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
