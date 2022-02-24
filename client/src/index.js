import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserContext from "./Context/UserContext";
import ProductProvider from "./Context/productContext/ProductContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <UserContext>
        <App />
      </UserContext>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
