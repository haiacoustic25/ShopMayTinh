import React from "react";
import { Card } from "react-bootstrap";
import "./InforProduct.css";

const InforProduct = (props) => {
  const { product } = props;
  return (
    <Card style={{ width: "18rem" }} className="inforProduct">
      <Card.Img className="inforProduct__img" variant="top" src={product.img} />
      <Card.Body>
        <Card.Title className="inforProduct__name">{product.name}</Card.Title>
        <Card.Text className="inforProduct__price--new">
          {(
            product.price -
            (product.price * product.promotion) / 100
          ).toLocaleString()}
        </Card.Text>
        <Card.Text className="inforProduct__price--old  d-flex">
          {product.promotion > 0 ? (
            <span>
              <span>{product.price.toLocaleString()}</span>
              <span className="inforProduct__promotion ml-3">
                ( Tiết kiệm {product.promotion}% )
              </span>
            </span>
          ) : (<span>Không có giảm giá</span>)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InforProduct;
