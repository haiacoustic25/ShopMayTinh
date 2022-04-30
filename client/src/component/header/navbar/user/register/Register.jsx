import React from "react";
import "./register.css";
import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Account } from "../../../../../Context/UserContext";
import axios from "axios";
import { storage } from "../../../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect } from "react";
import { apiUrl } from "../../../../../linkContants";
const Register = () => {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    username: "",
    password: "",
    avatar: "",
  });
  const [error, setError] = useState({ isError: false, message: "" });
  const { confirmLogin } = useContext(Account);
  const [previewAvatar, setPreviewAvatar] = useState();
  const [isSave, setIsSave] = useState(false);
  // % upload image
  const [progress, setProgress] = useState(0);

  // preview image
  const handlePreviewAvatar = (event) => {
    const file = event.target.files[0];
    file.preview = URL.createObjectURL(file);
    setPreviewAvatar(file);
  };

  //   router
  const navigate = useNavigate();

  // upload image
  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/avatar/${file.name}`);
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
          setRegister({ ...register, avatar: url });
          setIsSave(true);
        });
      }
    );
  };

  const onChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const file = event.target[5].files[0];

    if (file) uploadFiles(file);
    else setIsSave(true);
  };
  useEffect(() => {
    if (isSave) {
      const submit = async () => {
        const res = await axios.post(
          `${apiUrl}/auth/register`,
          register
        );
        if (res.data.success) {
          confirmLogin(res.data.user);
          navigate("/");
        } else {
          if (res.status === 200) {
            setError({ isError: true, message: "Nhập thiếu thông tin" });
          } else if (res.status === 204) {
            setError({ isError: true, message: "Tên đăng nhập đã tồn tại" });
          }
        }
      };
      submit();
    }
    setIsSave(false);
  }, [isSave]);

  return (
    <Form className="register__form" onSubmit={handleRegister}>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Họ"
          className="mr-2"
          name="firstName"
          value={register.firstName}
          onChange={onChange}
        />
        <Form.Control
          type="text"
          placeholder="Tên"
          name="lastName"
          value={register.lastName}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control
          type="number"
          placeholder="Số Điện thoại"
          name="phoneNumber"
          value={register.phoneNumber}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Tên đăng nhập"
          name="username"
          value={register.username}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control
          type="password"
          placeholder="Mật khẩu"
          name="password"
          value={register.password}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control
          type="file"
          className="h-25 mr-2"
          onChange={handlePreviewAvatar}
          name="avatar"
        />
        <div className="register__img w-75">
          {previewAvatar && (
            <img src={previewAvatar.preview} alt="" className="w-100" />
          )}
        </div>
      </Form.Group>
      {error.isError && <div className="register__error">{error.message}</div>}

      <Button variant="primary" type="submit">
        Đăng ký
      </Button>
      <div className="mt-3">
        Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </div>
    </Form>
  );
};

export default Register;
