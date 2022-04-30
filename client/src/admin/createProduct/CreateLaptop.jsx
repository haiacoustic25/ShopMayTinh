import React from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

import { apiUrl } from "../../linkContants";

const mdParser = new MarkdownIt();

const CreateLaptop = () => {
  const [laptop, setLaptop] = useState({
    name: "",
    trademark: "",
    screenSize: "",
    price: "",
    promotion: "",
    color: "",
    CPU: "",
    storage: "",
    RAM: "",
    battery: "",
    weight: "",
    img: "",
    descriptionsHTML: "",
  });
  const [previewImg, setPreviewImg] = useState();
  const [check, setCheck] = useState(false);
  const [progress, setProgress] = useState(0);
  // prewiew img
  const handlePreviewImg = (event) => {
    const file = event.target.files[0];
    file.preview = URL.createObjectURL(file);
    setPreviewImg(file);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/product/laptop/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setLaptop({ ...laptop, img: url });
          setCheck(true);
          setLaptop({
            name: "",
            trademark: "",
            screenSize: "",
            price: "",
            promotion: "",
            color: "",
            CPU: "",
            storage: "",
            RAM: "",
            battery: "",
            weight: "",
            img: "",
            descriptionsHTML: "",
          });
        });
      }
    );
  };

  const onChange = (event) => {
    setLaptop({ ...laptop, [event.target.name]: event.target.value });
  };
  // desciption
  const handleEditorChange = ({ html, text }) => {
    setLaptop({ ...laptop, descriptionsHTML: html });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setCheck(true);
    const file = event.target[13].files[0];
    // console.log(event.target[13].files[0]);
    uploadFiles(file);
  };

  useEffect(() => {
    if (check) {
      const submit = async () => {
        const res = await axios.post(`${apiUrl}/product/create/laptop`, laptop);
        if (res.data.success) {
          alert("Tạo sản phẩm thành công.");
        }
      };
      submit();
    }
    setCheck(false);
  }, [check]);
  return (
    <Form noValidate className="mt-3" onSubmit={onSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Tên máy</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Tên máy"
            name="name"
            value={laptop.name}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Hãng</Form.Label>
          <Form.Select
            required
            className="d-block w-100 h-50"
            name="trademark"
            value={laptop.trademark}
            onChange={onChange}
          >
            <option>Chọn hãng ...</option>
            <option>Lenovo</option>
            <option>Razer</option>
            <option>Dell</option>
            <option>Asus</option>
            <option>Apple</option>
            <option>Acer</option>
            <option>HP</option>
            <option>Microsoft</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Giá</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Giá"
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
            placeholder="Khuyễn mãi"
            name="promotion"
            value={laptop.promotion}
            onChange={onChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Màn hình</Form.Label>
          <Form.Select
            required
            className="d-block w-100 h-50"
            name="screenSize"
            value={laptop.screenSize}
            onChange={onChange}
          >
            <option>Chọn tỷ lệ màn hình ...</option>
            <option>13.3 inch</option>
            <option>14 inch</option>
            <option>15.6 inch</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>RAM</Form.Label>
          <Form.Select
            required
            className="d-block w-100 h-50"
            name="RAM"
            value={laptop.RAM}
            onChange={onChange}
          >
            <option>Chọn loại RAM ...</option>
            <option>4 GB</option>
            <option>8 GB</option>
            <option>12 GB</option>
            <option>16 GB</option>
            <option>20 GB</option>
            <option>32 GB</option>
            <option>64 GB</option>
            <option>128 GB</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>CPU</Form.Label>
          <Form.Select
            required
            className="d-block w-100 h-50"
            name="CPU"
            value={laptop.CPU}
            onChange={onChange}
          >
            <option>Chọn loại CPU ...</option>
            <option>Intel Dual Core</option>
            <option>Intel Core i3</option>
            <option>Intel Core i5</option>
            <option>Intel Core i7</option>
            <option>Intel Core i9</option>
            <option>InTel Xeon</option>
            <option>AMD Ryzen 3</option>
            <option>AMD Ryzen 5</option>
            <option>AMD Ryzen 7</option>
            <option>Apple M1</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Lưu trữ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lưu trữ"
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
            placeholder="Màu"
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
            placeholder="Pin"
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
            placeholder="Trọng lượng"
            name="weight"
            value={laptop.weight}
            onChange={onChange}
          />
        </Form.Group>
      </Row>
      <MdEditor
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control
          type="file"
          className="h-25 mr-2"
          onChange={handlePreviewImg}
          name="avatar"
        />
        <div className="w-100">
          {previewImg && (
            <img src={previewImg.preview} alt="" className="w-100" />
          )}
        </div>
      </Form.Group>
      <Button type="submit">Tải lên</Button>
    </Form>
  );
};

export default CreateLaptop;
