import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="menu d-flex ">
      <li className="menu__list">
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Flaptop.png?alt=media&token=70473b5f-f5d3-4ddd-bda8-2b48ec355bca"
            alt=""
          />
          <span>LapTop</span>
        </Link>
        <ul className="menu__list--child">
          <li>Dell</li>
          <li>HP</li>
          <li>ASUS</li>
          <li>Nitro</li>
          <li>Macbook</li>
          <li>Các loại khác</li>
        </ul>
      </li>
      <li className="menu__list">
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fcomputer.png?alt=media&token=300e22e1-7f95-4430-86db-a87161ec1c47"
            alt=""
          />
          <span>PC</span>
        </Link>
        <ul className="menu__list--child">
          <li>Dell</li>
          <li>HP</li>
          <li>ASUS</li>
          <li>Nitro</li>
          <li>Macbook</li>
          <li>Các loại khác</li>
        </ul>
      </li>
      <li className="menu__list">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fmouse.png?alt=media&token=e8fc0bba-bbf1-49aa-96c9-72a899f59800"
          alt=""
        />
        <span>Chuột</span>
        <ul className="menu__list--child">
          <li>Logitech</li>
          <li>Fuhlen</li>
          <li>LG</li>
          <li>ASUS</li>
          <li>Dareu</li>
          <li>Các loại khác</li>
        </ul>
      </li>
      <li className="menu__list">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fkeyboard.png?alt=media&token=3320a3e4-b348-4d4c-92ad-b7c3c8f45b73"
          alt=""
        />
        <span>Bàn phím</span>
        <ul className="menu__list--child">
          <li>Logitech</li>
          <li>Fuhlen</li>
          <li>LG</li>
          <li>ASUS</li>
          <li>Dareu</li>
          <li>Các loại khác</li>
        </ul>
      </li>
      <li className="menu__list">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fheadphone.png?alt=media&token=f25b50e6-721f-4916-a2bd-c5d0ea8dc48c"
          alt=""
        />
        <span>Tai nghe</span>
        <ul className="menu__list--child">
          <li>Logitech</li>
          <li>Fuhlen</li>
          <li>LG</li>
          <li>ASUS</li>
          <li>Dareu</li>
          <li>Các loại khác</li>
        </ul>
      </li>
      <li className="menu__list">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fhard-disk.png?alt=media&token=d2092b63-d67f-4f63-a64e-a84262696ec3"
          alt=""
        />
        <span>Ổ cứng</span>
      </li>
      <li className="menu__list">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fgamepad.png?alt=media&token=68714f76-7827-44fe-9588-e1b3cc781cae"
          alt=""
        />
        <span>Máy chơi game</span>
      </li>
      <li className="menu__list">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fnot-equal.png?alt=media&token=ab56156d-c67d-4295-b7a6-17a4968c7d0f"
          alt=""
        />
        <span>Khác</span>
        <ul className="menu__list--child">
          <li>Ghế công thái học</li>
          <li>Balo,Túi</li>
          <li>Loa</li>
          <li>Cổng chuyển đổi</li>
          <li>Xạc</li>
          <li>Đế tản nhiệt</li>
        </ul>
      </li>
    </ul>
  );
};

export default Menu;
