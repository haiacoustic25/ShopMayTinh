import React from "react";
import "./notification.css";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <div className="navbar__icon--notification">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fbell.png?alt=media&token=217d0930-ee8c-41d9-866d-0c588ec89cb9"
        alt=""
      />
      <div className="notification__count">
        <span>0</span>
      </div>
      <div className="notification">
        <div className="notification__img">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/notification.png?alt=media&token=086206ab-3a60-496a-b002-7cd04703ae0f"
            alt=""
          />
        </div>
        <div className="notification__all">
          <Link to="/cart">Xem tất cả </Link>
        </div>
      </div>
    </div>
  );
};

export default Notification;
