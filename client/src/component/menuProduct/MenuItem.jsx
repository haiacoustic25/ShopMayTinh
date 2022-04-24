import React, { useState } from "react";

const MenuItem = (props) => {
  const { data, handleClick } = props;
  const [openList, setOpenList] = useState(false);
  const handleOpen = () => {
    setOpenList(!openList);
  };
  return (
    <div className="menuProduct__filter">
      <div
        className="menuProduct__filter--name d-flex align-items-center justify-content-between "
        onClick={handleOpen}
      >
        <h5>{data.title}</h5>
        {openList ? (
          <i className="fa-solid fa-minus"></i>
        ) : (
          <i className="fa-solid fa-plus"></i>
        )}
      </div>
      {!openList ? (
        <></>
      ) : (
        <div className="menuProduct__filter--list">
          {data.list.map((e, i) => (
            <span
              className="menuProduct__filter--item"
              key={i}
              onClick={() => {
                handleClick({ [data.filter]: e });
              }}
            >
              {e}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
