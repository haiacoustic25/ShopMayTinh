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

const mdParser = new MarkdownIt();
const CreateMouse = () => {
  const [mouse, setMouse] = useState({
    name: "",
    trademark: "",
    price: "",
    promotion: "",
    connect: "",
    color: "",
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
            connect: "",
            color: "",
            img: "",
            descriptionsHTML: "",
          });
        });
      }
    );
  };

  const onChange = (event) => {
    setMouse({ ...mouse, [event.target.name]: event.target.value });
  };
  const handleEditorChange = ({ html, text }) => {
    setMouse({ ...mouse, descriptionsHTML: html });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setCheck(true);
    const file = event.target[8].files[0];
    // console.log(event.target[8])
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
          <Form.Label>Tên chuột</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Tên chuột"
            name="name"
            value={mouse.name}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Hãng</Form.Label>
          <Form.Select
            required
            className="d-block w-100 h-50"
            name="trademark"
            value={mouse.trademark}
            onChange={onChange}
          >
            <option>Chọn hãng ...</option>
            <option>Logitech</option>
            <option>Newmen</option>
            <option>Microsoft</option>
            <option>Asus</option>
            <option>Razer</option>
            <option>DAREU</option>
            <option>MSI</option>
            <option>Lenovo</option>
            <option>GIGABYTE</option>
          </Form.Select>
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
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Kết nối</Form.Label>
          <Form.Select
            required
            className="d-block w-100 h-50"
            name="connect"
            value={mouse.connect}
            onChange={onChange}
          >
            <option>Chọn hãng ...</option>
            <option>Wired</option>
            <option>Wireless</option>
          </Form.Select>
        </Form.Group>
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
