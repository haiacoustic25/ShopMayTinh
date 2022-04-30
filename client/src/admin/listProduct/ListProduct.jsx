import React from "react";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ListProduct.css";
import FixProduct from "./FixProduct";
import DeleteProduct from "./DeleteProduct";
import { apiUrl } from "../../linkContants";

const ListProduct = (props) => {
  const { selectProp } = props;
  const [listLaptop, setListLaptop] = useState([]);
  const [fixProduct, setFixProduct] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [inforLaptop, setInforLaptop] = useState();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    // call API laptop
    const laptop = async () => {
      const res = await axios.get(`${apiUrl}/product/laptop`);
      if (res.data.success) setListLaptop(res.data.listProduct);
    };
    laptop();

    setCheck(false);
  }, [check]);

  return (
    <>
      {selectProp.product && selectProp.product === "laptop" && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên máy</th>
              <th>Hãng</th>
              <th>Giá cũ</th>
              <th>Khuyễn mãi</th>
              <th>Giá mới</th>
              <th>Ảnh</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {listLaptop.map((laptop, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{laptop.name}</td>
                <td>{laptop.trademark}</td>
                <td>{laptop.price.toLocaleString()}</td>
                <td>{laptop.promotion}</td>
                <td>{laptop.priceNew.toLocaleString()}</td>
                <td>
                  <img src={laptop.img} alt="" width="80px" className="img" />
                </td>
                <td>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fedit.png?alt=media&token=59f160ee-ef44-4158-aa45-15958e52c8af"
                    alt=""
                    width="20px"
                    className="mr-2"
                    onClick={() => {
                      setFixProduct(true);
                      setInforLaptop(laptop);
                    }}
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fdelete.png?alt=media&token=eb340b2e-9b14-4556-b19a-49872a227fb3"
                    alt=""
                    width="20px"
                    onClick={() => {
                      setDeleteProduct(true);
                      setInforLaptop(laptop);
                    }}
                    className="function"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {fixProduct && (
        <div className="modal">
          <div
            className="modal__overlay"
            onClick={() => {
              setFixProduct(false);
            }}
          ></div>
          <div className="modal__body">
            <FixProduct
              inforLaptop={inforLaptop}
              fixProduct={setFixProduct}
              setCheck={setCheck}
            />
          </div>
        </div>
      )}
      {deleteProduct && (
        <div className="modal">
          <div
            className="modal__overlay"
            onClick={() => {
              setDeleteProduct(false);
            }}
          ></div>
          <div className="modal__body">
            <DeleteProduct
              inforLaptop={inforLaptop}
              deleteProduct={setDeleteProduct}
              setCheck={setCheck}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ListProduct;
