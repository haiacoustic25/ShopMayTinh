import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./InforProduct.css";

const InforProduct = (props) => {
  const { product, slug } = props;
  return (
    <Link to={slug ? `/${slug}/${product._id}` : `${product._id}`}>
      <Card style={{ width: "18rem" }} className="inforProduct">
        <Card.Img
          className="inforProduct__img"
          variant="top"
          src={product.img}
        />
        <Card.Body>
          <Card.Title className="inforProduct__name">{product.name}</Card.Title>
          <Card.Text className="inforProduct__price--new">
            {product.priceNew.toLocaleString()} ₫
          </Card.Text>
          <Card.Text className="inforProduct__price--old  d-flex">
            {product.promotion > 0 ? (
              <span>
                <span>{product.price.toLocaleString()} ₫</span>
                <span className="inforProduct__promotion ml-3">
                  ( Tiết kiệm {product.promotion}% )
                </span>
              </span>
            ) : (
              <span>Không có giảm giá</span>
            )}
          </Card.Text>
          <div className="d-flex inforProduct__star">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default InforProduct;
