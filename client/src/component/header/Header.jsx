import React from "react";
import "./header.css";
import Menu from "./menu/Menu";

import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Menu />
    </div>
  );
};

export default Header;
