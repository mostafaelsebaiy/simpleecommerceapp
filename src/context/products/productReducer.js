import {
  SET_LOADING,
  ADD_TO_CART,
  GET_PRODUCTS,
  DELETE_FROM_CART,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case ADD_TO_CART:
      let item = action.payload;
      let existItem = state.cartItems.find(
        (cartitem) => cartitem.id === item.id
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id ? item : cartItem
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
