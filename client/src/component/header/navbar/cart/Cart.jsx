import React, { useEffect, useContext } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { requestCart } from "../../../../Context/cartContext/callAPI";
import { CartContext } from "../../../../Context/cartContext/CartProvider";
import { Account } from "../../../../Context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCartRedux } from "../../../../Redux/Action/action";

const Cart = () => {
  // const { state, dispatch } = useContext(CartContext);
  const { checkAccount } = useContext(Account);
  const state = useSelector((state) => state.cart.listCart);
  const dispatch = useDispatch();
  useEffect(() => {
    // if (checkAccount.isAuth) {
    //   requestCart(dispatch, checkAccount.user._id);
    // }
    if (checkAccount.isAuth) {
      dispatch(fetchAllCartRedux(checkAccount.user._id));
    }
  }, []);
  return (
    <div className="navbar__icon--cart">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fshopping-cart.png?alt=media&token=6682ad8e-bc16-442f-ad2a-11332b53fb09"
        alt=""
      />
      {checkAccount.isAuth && (
        <div className="cart__count">
          {state && <span>{state.length}</span>}
        </div>
      )}

      <div className="cart">
        {!checkAccount.isAuth && state && (
          <div className="cart__img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/empty-cart.png?alt=media&token=7addad2f-52ac-4817-9e03-648e45ea23d2"
              alt=""
            />
          </div>
        )}
        {!checkAccount.isAuth ||
          (state &&
            state.length !== 0 &&
            state &&
            state.map((item, index) => (
              <div className="cart__product d-flex" key={index}>
                <img
                  src={item.productId.img}
                  alt=""
                  className="cart__product--img"
                />

                <div className="cart__product--infor">
                  <div className="cart__product--infor-name">
                    {item.productId.name}
                  </div>
                  <div className="cart__product--infor-price">
                    {`Giá tiền: ${item.productId.priceNew.toLocaleString()} đ`}
                  </div>
                  <div className="cart__product--infor-quantity">
                    Số lượng: {item.quantity}
                  </div>
                </div>
              </div>
            )))}
        <div className="cart_all">
          <Link to={!checkAccount.isAuth ? "/login" : "/cart"}>
            Xem tất cả{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
