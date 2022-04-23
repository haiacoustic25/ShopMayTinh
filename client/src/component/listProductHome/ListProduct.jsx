import React, { useContext, useEffect } from "react";
import ListLaptop from "./ListLaptop";
import "./ListProduct.css";
import { ProductContext } from "../../Context/productContext/ProductContext";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const { state } = useContext(ProductContext);
  return (
    <>
      <div className="listProduct">
        <div className="listProduct__title d-flex justify-content-between align-items-center">
          <h4>HÀNG MỚI</h4>
        </div>
        <ListLaptop data={state.laptopData} slug={"laptop"} />
      </div>
    </>
  );
};

export default ListProduct;
