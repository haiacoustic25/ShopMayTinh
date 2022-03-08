import React from "react";
import { useState } from "react";
import "./MenuProduct.css";

const MenuProduct = (props) => {
  const { data, handleFilter } = props;
  const [checkTitle, setCheckTitle] = useState({
    title: [],
  });
  const handleClick = (title) => {
    let array = checkTitle.title;
    let count = 0;
    let check = 0;
    if (array.length === 0) {
      count = 0;
    } else {
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === title) {
          count++;
          check = index;
          break;
        } else {
          count = 0;
        }
      }
    }

    if (count === 0) array.push(title);
    else array.splice(check, 1);
    setCheckTitle({ ...checkTitle, title: array });
  };
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
          <div className="menuProduct__filter" key={index}>
            <div
              className="menuProduct__filter--name d-flex align-items-center justify-content-between "
              onClick={() => {
                handleClick(item.title);
              }}
            >
              <h5>{item.title}</h5>
              {checkTitle.title.length === 0 ? (
                <i className="fa-solid fa-plus"></i>
              ) : (
                <>
                  {checkTitle.title.map((title, index) => {
                    if (title === item.title)
                      return (
                        <>
                          <i className="fa-solid fa-minus"></i>
                        </>
                      );
                    else
                      return (
                        <>
                          <i className="fa-solid fa-plus"></i>
                        </>
                      );
                  })}
                </>
              )}
            </div>

            {checkTitle.title.map((title, index) => {
              if (title === item.title)
                return (
                  <div className="menuProduct__filter--list" key={index}>
                    {item.list.map((e, i) => (
                      <span
                        className="menuProduct__filter--item"
                        key={i}
                        onClick={() => {
                          onClick({ [item.filter]: e });
                        }}
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuProduct;
