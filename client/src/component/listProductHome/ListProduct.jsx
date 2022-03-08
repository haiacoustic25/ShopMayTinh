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
          <h4>LAPTOP, MÁY TÍNH XÁCH TAY</h4>

          <Link to="/laptop">
            Xem tất cả <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <ListLaptop data={state.laptopData} slug={"laptop"} />
      </div>
      <div className="listProduct">
        <div className="listProduct__title d-flex justify-content-between align-items-center">
          <h4>PC Gaming</h4>
          <Link to="/PC">
            Xem tất cả <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <ListLaptop data={state.PCData} slug={"PC"} />
      </div>
      <div className="listProduct">
        <div className="listProduct__title d-flex justify-content-between align-items-center">
          <h4>Mouse</h4>
          <Link to="/mouse">
            Xem tất cả <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <ListLaptop data={state.mouseData} slug={"mouse"} />
      </div>
    </>
  );
};

export default ListProduct;
