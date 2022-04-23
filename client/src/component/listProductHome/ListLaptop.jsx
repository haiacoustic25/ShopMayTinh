import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InforProduct from "./InforProduct";
import "./ListProduct.css";

const ListLaptop = (props) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
  };

  const { data, slug } = props;

  return (
    <Slider {...settings}>
      {data.length > 0 &&
        data.map((product, index) => (
          <div key={index}>
            <InforProduct product={product} />
          </div>
        ))}
    </Slider>
  );
};

export default ListLaptop;
