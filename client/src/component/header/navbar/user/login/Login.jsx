import React from "react";
import "./login.css";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Account } from "../../../../../Context/UserContext";
import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [error, setError] = useState({ isError: false, message: "" });
  const { confirmLogin } = useContext(Account);

  // router
  const navigate = useNavigate();

  const onChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:5000/auth/login", login);

    if (res.data.success) {
      confirmLogin(res.data.user);
      if(res.data.user.admin) navigate("/admin");
      else navigate("/");
    } else {
      if (res.status === 201) {
        setError({
          isError: true,
          message: "Thiếu tên đăng nhập hoặc mật khẩu",
        });
      } else if (res.status === 200) {
        setError({
          isError: true,
          message: "Sai tên đăng nhập hoặc mật khẩu",
        });
      }
    }
  };
  return (
    <div>
      <Form className="login__form" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Tên đăng nhập "
            name="username"
            value={login.username}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Mật khẩu"
            name="password"
            value={login.password}
            onChange={onChange}
          />
        </Form.Group>
        {error.isError && <div className="login__error">{error.message}</div>}
        <Button variant="primary" type="submit">
          Đăng nhập
        </Button>
        <div className="login__form--register">
          <button>
            <Link to="/register">Tạo tài khoản </Link>
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
