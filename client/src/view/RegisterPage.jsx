import React from "react";
import { Link } from "react-router-dom";
import Register from "../component/header/navbar/user/register/Register";

const RegisterPage = () => {
  return (
    <div className="body">
      <div className="d-flex mt-5">
        <div>
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/logo.png?alt=media&token=fc8ad82d-f446-4574-950b-7e4b46b5dbb8"
              alt=""
              className="ml-5 mr-5 w-100"
            />
          </Link>
          <h2 className="ml-5 w-75">Đăng ký</h2>
        </div>
        <div className="mr-5 ml-5 p-5">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
