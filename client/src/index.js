import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserContext from "./Context/UserContext";
import CartProvider from "./Context/cartContext/CartProvider";
import ProductProvider from "./Context/productContext/ProductContext";

import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <CartProvider>
        <ProductProvider>
          <UserContext>
            <App />
          </UserContext>
        </ProductProvider>
      </CartProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
