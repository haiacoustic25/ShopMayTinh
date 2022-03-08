import React from "react";
import { useReducer, createContext } from "react";
import reducer from "./cartReducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initCart = {};
  const [state, dispatch] = useReducer(reducer, initCart);
  const data = {
    state,
    dispatch,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
