import {
  CREATE_CART_ERROR,
  CREATE_CART_REQUEST,
  CREATE_CART_SUCCESS,
  FETCH_CART_ERROR,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
} from "./type";

import axios from "axios";

// create cart
export const createCartRequest = () => {
  return { type: CREATE_CART_REQUEST };
};

export const createCartSuccess = () => {
  return { type: CREATE_CART_SUCCESS };
};

export const createCartError = () => {
  return { type: CREATE_CART_ERROR };
};

export const createNewCartRedux = (userId, products) => {
  return async (dispatch, getState) => {
    dispatch(createCartRequest());
    try {
      let res = await axios.post("http://localhost:5000/cart/create", {
        userId,
        products,
      });
      if (res && res.data.success) {
        dispatch(createCartSuccess());
        dispatch(fetchAllCartRedux());
        alert("Thêm giỏ hàng thành công");
      }
    } catch (error) {
      dispatch(createCartError());
    }
  };
};

// fetch cart
export const fetchCartRequest = () => {
  return { type: FETCH_CART_REQUEST };
};
export const fetchCartSuccess = (payload) => {
  return { type: FETCH_CART_SUCCESS, payload };
};
export const fetchCartError = () => {
  return { type: FETCH_CART_ERROR };
};

export const fetchAllCartRedux = (id) => {
  return async (dispatch, getState) => {
    dispatch(fetchCartRequest());
    try {
      let res = await axios.get(`http://localhost:5000/cart/read?userId=${id}`);

      const data = res.data.cart ? res.data.cart : [];
      if (res.data.success) {
        dispatch(fetchCartSuccess(data));
      }
    } catch (error) {
      dispatch(fetchCartError());
    }
  };
};
