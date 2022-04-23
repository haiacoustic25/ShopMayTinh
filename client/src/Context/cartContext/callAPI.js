import axios from "axios";
import { callAPICart } from "./cartAction";

const getCart = (userId) =>
  axios.get(`http://localhost:5000/cart/read?userId=${userId}`);

export const requestCart = async (dispatch, userId) => {
  const res = await getCart(userId);
  dispatch(callAPICart(res.data.cart));
};
