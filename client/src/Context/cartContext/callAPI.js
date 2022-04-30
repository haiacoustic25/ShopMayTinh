import axios from "axios";
import { callAPICart } from "./cartAction";
import {apiUrl} from "../../linkContants"

const getCart = (userId) =>
  axios.get(`${apiUrl}/cart/read?userId=${userId}`);

export const requestCart = async (dispatch, userId) => {
  const res = await getCart(userId);
  dispatch(callAPICart(res.data.cart));
};
