import "./App.css";
import HomePage from "./view/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./view/LoginPage";
import RegisterPage from "./view/RegisterPage";
import AdminPage from "./admin/AdminPage";
import ProductPage from "./view/ProductPage";
import { useEffect, useState } from "react";
import ProductDetailPage from "./view/ProductDetailPage";
import CartPage from "./view/CartPage";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const handleRollTheTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
      {scrollPosition >= 100 && (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fup-arrow.png?alt=media&token=426973e4-96d4-46b3-a041-86bef0ff7e6c"
          className="rollTheTop"
          onClick={handleRollTheTop}
        ></img>
      )}
    </div>
  );
}

export default App;
