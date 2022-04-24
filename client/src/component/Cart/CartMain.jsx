import React, { useState, useContext } from "react";

import { Table, Button, Modal } from "react-bootstrap";
import "./CartMain.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductInCartRedux } from "../../Redux/Action/action";
import { Account } from "../../Context/UserContext";
const CartPage = () => {
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setProductId(id);
  };

  const [productId, setProductId] = useState();
  const listCart = useSelector((state) => state.cart.listCart);

  const dispatch = useDispatch();
  const { checkAccount } = useContext(Account);

  const handleDelete = () => {
    console.log(checkAccount.user._id, productId);
    if (checkAccount.isAuth) {
      dispatch(deleteProductInCartRedux(checkAccount.user._id, productId));
    }
    setShow(false);
  };

  const total = () => {
    let sum = 0;
    if (listCart && checkAccount.isAuth) {
      for (let i = 0; i < listCart.length; i++) {
        sum += listCart[i].productId.priceNew;
      }
    }
    return sum;
  };
  total();
  return (
    <div>
      <div className="body">
        {listCart && (
          <>
            <Table bordered>
              <thead>
                <tr>
                  <th></th>
                  <th>Thông tin chi tiết sản phẩm</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Tổng giá</th>
                </tr>
              </thead>
              <tbody>
                {listCart &&
                  listCart.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.productId.img}
                          alt=""
                          className="cartPage__img"
                        />
                      </td>
                      <td className="cartPage__name">
                        {item.productId.name}
                        <span onClick={() => handleShow(item.productId._id)}>
                          Xóa
                        </span>
                      </td>
                      <td>
                        {(
                          item.productId.priceNew -
                          (item.productId.priceNew % 1000)
                        ).toLocaleString()}{" "}
                        đ
                      </td>
                      <td className="cartPage__quantity">
                        <span>Số lượng: {item.quantity}</span>
                      </td>
                      <td>
                        {(
                          item.productId.priceNew -
                          (item.productId.priceNew % 1000)
                        ).toLocaleString()}{" "}
                        đ
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            <div>
              <div className="cartPage__total d-flex flex-row-reverse">
                Tổng tiền: {(total() - (total() % 1000)).toLocaleString()} đ
              </div>

              <div className="cartPage__btn d-flex flex-row-reverse">
                <Button variant="success">Thanh Toán</Button>
              </div>
            </div>{" "}
          </>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có đồng ý xóa sản phẩm hay không</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartPage;
