import React from "react";
import { useState } from "react";
import "./MenuProduct.css";
import MenuItem from "./MenuItem";
const MenuProduct = (props) => {
  const { data, handleFilter } = props;
  const onClick = (value) => {
    handleFilter(value);
  };
  
  
  return (
    <div className="menuProduct mr-5">
      <div className="d-flex align-items-center mb-2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Ffilter.png?alt=media&token=cfbb95fd-962e-485c-b699-b81400329a65"
          alt=""
          className="menuProduct__img"
        />
        <h5 className="mb-0">Bộ lọc</h5>
      </div>
      <div>
        {data.map((item, index) => (
          <MenuItem
            data={item}
            handleClick={onClick}
          
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuProduct;
