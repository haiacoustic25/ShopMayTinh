import React from "react";
import "./DeleteProduct.css";
import { Button } from "react-bootstrap";
import axios from "axios";

const DeleteProduct = (props) => {
  const { inforLaptop, deleteProduct, setCheck, inforMouse, inforPC } = props;
  const handleClick = async () => {
    let link = "";
    if (inforMouse) {
      link = inforMouse._id;
    }
    if (inforLaptop) {
      link = inforLaptop._id;
    }
    if (inforPC) {
      link = inforPC._id;
    }
    const res = await axios.delete(
      `http://localhost:5000/product/delete/${link}`
    );
    if (res.data.success) {
      alert("Xóa thành công");
      deleteProduct(false);
      setCheck(true);
      link = "";
    }
  };
  return (
    <div className="DeleteProduct">
      <div>Bạn có đồng ý xóa không?</div>
      <Button variant="primary" onClick={handleClick}>
        Đồng ý
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          deleteProduct(false);
        }}
      >
        Hủy
      </Button>
    </div>
  );
};

export default DeleteProduct;
