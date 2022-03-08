import React from "react";
import Header from "../component/header/Header";
import Slider from "../component/slider/SliderMain";
import ListProduct from "../component/listProductHome/ListProduct";
import Footer from "../component/footer/Footer";
import {
  requestLaptop,
  requestPC,
  requestMouse,
} from "../Context/productContext/callAPI";
import { ProductContext } from "../Context/productContext/ProductContext";
import { useContext, useEffect } from "react";
const HomePage = () => {
  const { dispatch } = useContext(ProductContext);
  useEffect(() => {
    requestLaptop(dispatch);
    requestPC(dispatch);
    requestMouse(dispatch);
  }, []);
  return (
    <>
      <Header />
      <div className="body">
        <Slider />
        <ListProduct />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
