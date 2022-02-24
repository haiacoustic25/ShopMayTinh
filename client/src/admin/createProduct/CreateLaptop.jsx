import React from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const CreateLaptop = () => {
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
    img: "",
    descriptions: "",
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
            storage: "",
            RAM: "",
            battery: "",
            weight: "",
            img: "",
            descriptions: "",
          });
        });
      }
    );
  };

  const onChange = (event) => {
    setLaptop({ ...laptop, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setCheck(true);
    const file = event.target[11].files[0];

    uploadFiles(file);
    
  };

  useEffect(() => {
    if (check) {
      const submit = async () => {
        const res = await axios.post(
          "http://localhost:5000/product/create/laptop",
          laptop
        );
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
          <Form.Control
            required
            type="text"
            placeholder="Hãng"
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
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Màn hình</Form.Label>
          <Form.Control
            type="text"
            placeholder="Màn hình"
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
            placeholder="RAM"
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mô tả</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="descriptions"
          value={laptop.descriptions}
          onChange={onChange}
        />
      </Form.Group>
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
