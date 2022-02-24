import React, { useContext, useEffect } from "react";
import ListLaptop from "./ListLaptop";
import "./ListProduct.css";
import { ProductContext } from "../../Context/productContext/ProductContext";
import {
  requestLaptop,
  requestPC,
  requestMouse,
} from "../../Context/productContext/callAPI";

const ListProduct = () => {
  const { state, dispatch } = useContext(ProductContext);
  useEffect(() => {
    requestLaptop(dispatch);
    requestPC(dispatch);
  }, []);
  return (
    <>
      <div className="listProduct">
        <div className="listProduct__title d-flex">
          <h4>LAPTOP, MÁY TÍNH XÁCH TAY</h4>
          <div className="d-flex justify-content-between align-items-center">
            <ul className="d-flex">
              <li>Acer</li>
              <li>HP</li>
              <li>Asus</li>
              <li>Apple</li>
              <li>Lenovo</li>
            </ul>
            <div>
              Xem tất cả <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <ListLaptop data={state.laptopData} />
      </div>
      <div className="listProduct">
        <div className="listProduct__title d-flex">
          <h4>PC Gaming</h4>
          <div className="d-flex justify-content-between align-items-center">
            <ul className="d-flex">
              <li>Acer</li>
              <li>HP</li>
              <li>Asus</li>
              <li>Apple</li>
              <li>Lenovo</li>
            </ul>
            <div>
              Xem tất cả <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <ListLaptop data={state.PCData} />
      </div>
    </>
  );
};

export default ListProduct;
