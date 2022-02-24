import React from "react";
import { Link } from "react-router-dom";
import Login from "../component/header/navbar/user/login/Login";

const LoginPage = () => {
  return (
    <div className="d-flex mt-5 justify-content-between" >
      <div>
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/logo.png?alt=media&token=fc8ad82d-f446-4574-950b-7e4b46b5dbb8"
            alt=""
            className="ml-5"
          />
        </Link>
        <h3 className="ml-5 w-75">
          Nơi khách hàng gửi gắn niềm tin và nơi bán hàng uy tín và chất lượng
        </h3>
      </div>
      <div className="mr-5 mt-5">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
