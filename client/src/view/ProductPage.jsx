import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/header/Header";
import ListProductPage from "../component/listProductPage/ListProductPage";
import MenuProduct from "../component/menuProduct/MenuProduct";
import {
  filterLaptop,
  filterPC,
  filterMouse,
} from "../component/menuProduct/constants";
import Footer from "../component/footer/Footer";
import axios from "axios";

const ProductPage = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const callAPI = async () => {
      const res = await axios.get(`http://localhost:5000/product/laptop`, {
        params: query,
      });

      if (res.data.success) {
        setData(res.data.listProduct);
      }
    };
    callAPI();
  }, [query]);

  useEffect(() => {
    setQuery({});
  }, []);
  const handleFilter = (filter) => {
    setQuery({ ...query, ...filter });
  };

  const handleDeleteQuery = (filter) => {
    const newQuery = query;
    delete newQuery[filter];

    setQuery({ ...query, ...newQuery });
  };

  return (
    <div>
      <div className="body">
        <div>
          <h3>Tất cả lap top</h3>
          <div className="d-flex">
            <MenuProduct data={filterLaptop} handleFilter={handleFilter} />
            <ListProductPage
              data={data}
              handleFilter={handleFilter}
              query={query}
              handleDeleteQuery={handleDeleteQuery}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
