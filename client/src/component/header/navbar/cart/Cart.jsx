import React, { useEffect, useContext } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { requestCart } from "../../../../Context/cartContext/callAPI";
import { CartContext } from "../../../../Context/cartContext/CartProvider";
import { Account } from "../../../../Context/UserContext";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { checkAccount } = useContext(Account);
  useEffect(() => {
    if (checkAccount.isAuth) {
      requestCart(dispatch, checkAccount.user._id, "PC");
      requestCart(dispatch, checkAccount.user._id, "laptop");
    }
  }, []);
  console.log(state);
  return (
    <div className="navbar__icon--cart">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fshopping-cart.png?alt=media&token=6682ad8e-bc16-442f-ad2a-11332b53fb09"
        alt=""
      />
      <div className="cart__count">
        {checkAccount.isAuth && state.initCart && (
          <span>{state.initCart.products.length}</span>
        )}
      </div>
      <div className="cart">
        <div className="cart__img">
          {checkAccount.isAuth ||
            (state.initCart && state.initCart.products.length === 0) ||
            (!state.initCart && (
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/empty-cart.png?alt=media&token=7addad2f-52ac-4817-9e03-648e45ea23d2"
                alt=""
              />
            ))}
        </div>
        {}
        <div className="cart_all">
          <Link to="/cart">Xem tất cả </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
