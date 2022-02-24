import React from "react";
import Cart from "./cart/Cart";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Notification from "./notification/Notification";
import User from "./user/User";

const Navbar = () => {
  return (
    <div className="header__navbar d-flex justify-content-between align-items-center">
      <Link to="/">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/logo.png?alt=media&token=fc8ad82d-f446-4574-950b-7e4b46b5dbb8"
          alt=""
          className="navbar__img"
        />
      </Link>
      <div className="navbar__search d-flex">
        <div className="navbar__search--input">
          <input type="text" placeholder="Tìm kiếm..." />
          <div className="navbar__search--icon">
            <i className="fa-solid fa-magnifying-glass mr-2"></i>
          </div>
        </div>
      </div>
      <div className="navbar__icon d-flex">
        <div>
          <Cart />
        </div>
        <div>
          <Notification />
        </div>
        <div>
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
