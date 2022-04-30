import React, { useEffect, useState } from "react";
import ListProductPage from "../component/listProductPage/ListProductPage";
import MenuProduct from "../component/menuProduct/MenuProduct";
import { filterLaptop } from "../component/menuProduct/constants";
import axios from "axios";
import { apiUrl } from "../linkContants";
const ProductPage = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    const callAPI = async () => {
      const res = await axios.get(`${apiUrl}/product/laptop`, {
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
  // console.log(query);
  const handleFilter = (filter) => {
    setQuery({ ...query, ...filter });
    console.log(filter);
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
          <div className="listProduct__title ">
            <h4>TẤT CẢ LAPTOP</h4>
          </div>
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
