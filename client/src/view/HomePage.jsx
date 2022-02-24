import React from "react";
import Header from "../component/header/Header";
import Slider from "../component/slider/SliderMain";
import ListProduct from "../component/listProduct/ListProduct";
import Footer from "../component/footer/Footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <ListProduct />
      <Footer />
    </>
  );
};

export default HomePage;
