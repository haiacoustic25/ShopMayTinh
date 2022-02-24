import React from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const CreateMouse = () => {
  const [mouse, setMouse] = useState({
    name: "",
    trademark: "",
    price: "",
    promotion: "",
    color: "",
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
    const storageRef = ref(storage, `/product/mouse/${file.name}`);
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
          setMouse({ ...mouse, img: url });
          setCheck(true);
          setMouse({
            name: "",
            trademark: "",
            price: "",
            promotion: "",
            color: "",
            img: "",
            descriptions: "",
          });
        });
      }
    );
  };

  const onChange = (event) => {
    setMouse({ ...mouse, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setCheck(true);
    const file = event.target[6].files[0];

    uploadFiles(file);
  };

  useEffect(() => {
    if (check) {
      const submit = async () => {
        const res = await axios.post(
          "http://localhost:5000/product/create/mouse",
          mouse
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
            value={mouse.name}
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
            value={mouse.trademark}
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
            value={mouse.price}
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
            value={mouse.promotion}
            onChange={onChange}
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
            value={mouse.color}
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
          value={mouse.descriptions}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control
          type="file"
          className="h-25 mr-2"
          onChange={handlePreviewImg}
          name="img"
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

export default CreateMouse;
