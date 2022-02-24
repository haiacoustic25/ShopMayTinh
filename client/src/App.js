import "./App.css";
import HomePage from "./view/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./view/LoginPage";
import RegisterPage from "./view/RegisterPage";
import AdminPage from "./admin/AdminPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
