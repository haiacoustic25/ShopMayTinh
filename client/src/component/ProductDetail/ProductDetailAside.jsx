import React from "react";
import { Button } from "react-bootstrap";
import "./productDetailAside.css";
import { Link } from "react-router-dom";

const ProductDetailAside = (props) => {
  const { data, handleAddToCart, checkAccount } = props;

  return (
    <div className="productDetail__aside">
      <h4>{data.name}</h4>
      <div className="aside__trademark">{`Thương hiệu: ${data.trademark}`}</div>
      {data.priceNew && (
        <div className="aside__newPrice">
          {data.priceNew.toLocaleString()} ₫
        </div>
      )}
      <div className="d-flex">
        {data.price && (
          <div className="aside__oldPrice">{data.price.toLocaleString()} ₫</div>
        )}
        <div className="aside__promotion">-{data.promotion} %</div>
      </div>
      <div className="aside__color">
        <span>
          <i className="mr-2 fa-solid fa-palette"></i>Màu:
        </span>
        <div className="ml-3">{data.color}</div>
      </div>

      {checkAccount.isAuth ? (
        <Button
          variant="danger"
          className="pt-2 pb-2 pl-5 pr-5"
          onClick={handleAddToCart}
        >
          Thêm vào giỏ hàng
        </Button>
      ) : (
        <Link to="/login">
          <Button variant="danger" className="pt-2 pb-2 pl-5 pr-5">
            Thêm vào giỏ hàng
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ProductDetailAside;
