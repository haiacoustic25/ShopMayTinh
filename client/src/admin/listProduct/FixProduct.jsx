import React from "react";
import "./FixProduct.css";
import { Form, Row, Button, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const FixProduct = (props) => {
  const { inforLaptop, fixProduct, setCheck } = props;
  const [laptop, setLaptop] = useState({
    name: "",
    trademark: "",
    screenSize: "",
    price: "",
    promotion: "",
    color: "",
    storage: "",
    RAM: "",
    battery: "",
    weight: "",
    descriptions: "",
  });

  const onChange = (event) => {
    setLaptop({ ...laptop, [event.target.name]: event.target.value });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.put(
      `http://localhost:5000/product/fix/laptop/${inforLaptop._id}`,
      laptop
    );
    if (res.data.success) {
      alert("Cập nhật thành công");
      fixProduct(false);
    }
    setCheck(true);
  };
  return (
    <>
      {inforLaptop && (
        <Form noValidate className="mt-3 form__fix" onSubmit={onSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>Tên máy</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={inforLaptop.name}
                name="name"
                value={laptop.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Hãng</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={inforLaptop.trademark}
                name="trademark"
                value={laptop.trademark}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder={inforLaptop.price}
                name="price"
                value={laptop.price}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Khuyễn mãi</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder={inforLaptop.promotion}
                name="promotion"
                value={laptop.promotion}
                onChange={onChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Màn hình</Form.Label>
              <Form.Control
                type="text"
                placeholder={inforLaptop.screenSize}
                name="screenSize"
                value={laptop.screenSize}
                onChange={onChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>RAM</Form.Label>
              <Form.Control
                type="text"
                placeholder={inforLaptop.RAM}
                name="RAM"
                value={laptop.RAM}
                onChange={onChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Lưu trữ</Form.Label>
              <Form.Control
                type="text"
                placeholder={inforLaptop.storage}
                name="storage"
                value={laptop.storage}
                onChange={onChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Màu</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={inforLaptop.color}
                name="color"
                value={laptop.color}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Pin</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={inforLaptop.battery}
                name="battery"
                value={laptop.battery}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Trọng lượng</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder={inforLaptop.weight}
                name="weight"
                value={laptop.weight}
                onChange={onChange}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descriptions"
              value={laptop.descriptions}
              onChange={onChange}
              placeholder={inforLaptop.descriptions}
            />
          </Form.Group>
          <Button type="submit">Cập nhật</Button>
        </Form>
      )}
    </>
  );
};

export default FixProduct;
