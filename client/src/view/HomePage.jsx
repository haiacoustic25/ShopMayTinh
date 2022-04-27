import React from "react";
import Header from "../component/header/Header";
import Slider from "../component/slider/SliderMain";
import ListProduct from "../component/listProductHome/ListProduct";
import Footer from "../component/footer/Footer";
import ProductPage from "./ProductPage";
import { requestLaptop } from "../Context/productContext/callAPI";
import { ProductContext } from "../Context/productContext/ProductContext";
import { useContext, useEffect, useState } from "react";
import Loading from "../component/Loading/Loading";
const HomePage = () => {
  const { dispatch } = useContext(ProductContext);
  const [isDisplay, setIsDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      requestLaptop(dispatch);
      setIsDisplay(true);
    }, 2000);
  }, [isDisplay]);
  return (
    <>
      <Header />
      <div className="body">
        <Slider />
        <ListProduct />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2FScreenshot%202022-04-23%20140456.png?alt=media&token=62b14bf0-4346-4f90-9942-da6fe83da019"
          alt=""
          className="w-100 mt-3 mb-4"
        />

        {isDisplay ? <ProductPage /> : <Loading />}
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
