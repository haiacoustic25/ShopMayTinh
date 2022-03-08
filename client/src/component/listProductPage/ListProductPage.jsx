import React, { useState, useEffect } from "react";
import InforProduct from "../listProductHome/InforProduct";
import "./ListProductPage.css";
import { Form } from "react-bootstrap";
import Pagination from "../Pagination/Pagination";

const ListProductPage = (props) => {
  const { data, handleFilter, query, handleDeleteQuery } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(9);
  const sortAscendingLaptop = () => {
    handleFilter({ sort: "ascending" });
  };
  const sortDecreaseLaptop = () => {
    handleFilter({ sort: "descending" });
  };

  // get current product
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleComeBackPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  return (
    <div className="w-75">
      <div className="mr-5">
        <div className="d-flex listProductPage__sort align-items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fsort.png?alt=media&token=4199ee8d-f69e-429c-bf9d-fc45d52ae516"
            alt=""
          />
          <span>Sắp xếp theo:</span>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-0 ml-2">
                <Form.Check
                  inline
                  label="Tăng dần"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={sortAscendingLaptop}
                />
                <Form.Check
                  inline
                  label="Giảm dần"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={sortDecreaseLaptop}
                />
              </div>
            ))}
          </Form>
        </div>
      </div>
      <div className="d-flex">
        {Object.keys(query).length > 0 &&
          Object.keys(query).map(function (key, index) {
            return (
              <div
                className="mt-2 mb-2 mr-2 menuProduct__filter--item"
                key={index}
              >
                {query[key]}{" "}
                <span className="ml-2" onClick={() => handleDeleteQuery(key)}>
                  &times;
                </span>
              </div>
            );
          })}
      </div>
      <div className="grid grid-cols-6 gap-3 ">
        <div className="row">
          {data &&
            currentProduct.map((product, index) => (
              <div className="col-span-3" key={index}>
                <InforProduct product={product} />
              </div>
            ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handleComeBackPage={handleComeBackPage}
      />
    </div>
  );
};

export default ListProductPage;
