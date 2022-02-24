import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="navbar__icon--cart">
      <img src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fshopping-cart.png?alt=media&token=6682ad8e-bc16-442f-ad2a-11332b53fb09" alt="" />
      <div className="cart__count"><span>0</span></div>
      <div className="cart">
        <div className="cart__img">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/empty-cart.png?alt=media&token=7addad2f-52ac-4817-9e03-648e45ea23d2"
            alt=""
          />
        </div>
        <div className="cart_all">
          <Link to="/cart">Xem tất cả </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
