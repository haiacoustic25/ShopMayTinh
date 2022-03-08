import axios from "axios";
import { callAPICart } from "./cartAction";

const getCart = (userId, model) =>
  axios.get(`http://localhost:5000/cart/read?userId=${userId}&model=${model}`);

export const requestCart = async (dispatch, userId, model) => {
  const res = await getCart(userId, model);
  dispatch(callAPICart(res.data.cart));
};
