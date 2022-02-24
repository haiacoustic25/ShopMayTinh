import React from "react";
import { createContext, useReducer } from "react";
import reducer from "./productReducer";

const initListProduct = {
  laptopData: [],
  PCData: [],
  mouseData: [],
};

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initListProduct);
  const data = { state, dispatch };
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
