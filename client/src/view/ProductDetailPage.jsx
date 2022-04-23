import React, { useState, useEffect, useContext } from "react";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import ProductDetailMain from "../component/ProductDetail/ProductDetailMain";
import ProductDetailAside from "../component/ProductDetail/ProductDetailAside";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Account } from "../Context/UserContext";

const ProductDetailPage = () => {
  const { checkAccount } = useContext(Account);

  const { id } = useParams();
  const [data, setData] = useState({});
  const [addToCart, setAddToCart] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost:5000/product/${id}`
      );
      if (res.data.success) {
        setData(res.data.product);
      }
    };
    getData();
  }, [id]);
  useEffect(() => {
    const createCart = async () => {
      if (checkAccount && addToCart) {
        const res = await axios.post("http://localhost:5000/cart/create", {
          userId: checkAccount.user._id,
          products: { productId: id },
        });
        if (res.data.success) {
          alert("Thêm giỏ hàng thành công");
        }
      }
    };
    createCart();
  }, [addToCart]);

  const handleAddToCart = () => {
    setAddToCart(true);
  };
  console.log(checkAccount.isAuth)
  return (
    <>
      <Header />
      <div className="body">
        <div className="row position-relative">
          <div className="col-sm-8">
            <ProductDetailMain data={data} />
          </div>
          <div className="col-sm-4">
            <ProductDetailAside data={data} handleAddToCart={handleAddToCart} checkAccount={checkAccount} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
