import React from "react";
import "./user.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Account } from "../../../../Context/UserContext";

const User = () => {
  const { checkAccount, confirmLogout } = useContext(Account);
  const handleLogout = () => {
    confirmLogout();
  };
  return (
    <>
      {!checkAccount.isAuth ? (
        <div className="navbar__icon--user">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fuser.png?alt=media&token=4b2b735b-5b50-4311-87ef-c848c242d077"
            alt=""
          />
          <ul className="arrow-up">
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link to="/register">Đăng ký</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar__icon--user">
          <img
            src={checkAccount.user.avatar}
            alt="#"
            className="navbar__user--img"
          />
          <ul className="arrow-up">
            <li>
              {checkAccount.user.firstName + " " + checkAccount.user.lastName}
            </li>
            {checkAccount.user.admin && (
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            )}
            <li>
              <Link to="/login">Thông tin tài khoản</Link>
            </li>
            <li>
              <div onClick={handleLogout}>Đăng xuất</div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default User;
