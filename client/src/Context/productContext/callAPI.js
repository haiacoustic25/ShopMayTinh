import axios from "axios";
import { callAPILaptop, callAPIPC, callAPIMouse } from "./productAction";
// laptop
export const getLaptop = () =>
  axios.get("http://localhost:5000/product/post/laptop");
export const getPC = () => axios.get("http://localhost:5000/product/post/PC");
export const getMouse = () =>
  axios.get("http://localhost:5000/product/post/mouse");

export const requestLaptop = async (dispatch) => {
  const res = await getLaptop();
  dispatch(callAPILaptop(res.data.listProduct));
};
export const requestPC = async (dispatch) => {
  const res = await getPC();
  dispatch(callAPIPC(res.data.listProduct));
};
export const requestMouse = async (dispatch) => {
  const res = await getMouse();
  dispatch(callAPIMouse(res.data.listProduct));
};
