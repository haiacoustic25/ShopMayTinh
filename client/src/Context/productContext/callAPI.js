import axios from "axios";
import { callAPILaptop } from "./productAction";

import { apiUrl } from "../../linkContants";
// Call API
export const getLaptop = () => axios.get(`${apiUrl}/product/laptop`);

export const requestLaptop = async (dispatch) => {
  const res = await getLaptop();
  dispatch(callAPILaptop(res.data.listProduct));
};
