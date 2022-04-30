import {
  CREATE_CART_ERROR,
  CREATE_CART_REQUEST,
  CREATE_CART_SUCCESS,
  FETCH_CART_ERROR,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  DELETE_CART_ERROR,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
} from "./type";

import axios from "axios";
import { apiUrl } from "../../linkContants";
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
      let res = await axios.get(`${apiUrl}/cart/read?userId=${id}`);

      const data = res.data.cart ? res.data.cart : [];
      if (res.data.success) {
        dispatch(fetchCartSuccess(data));
      }
    } catch (error) {
      dispatch(fetchCartError());
    }
  };
};

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
      let res = await axios.post(`${apiUrl}/cart/create`, {
        userId,
        products,
      });
      if (res && res.data.success) {
        dispatch(createCartSuccess());
        dispatch(fetchAllCartRedux(userId));
        alert("Thêm giỏ hàng thành công");
      } else {
        alert("Sản phẩm đã tồn tại trong giỏ hàng.");
      }
    } catch (error) {
      dispatch(createCartError());
    }
  };
};

// delete product in cart
export const deleteProductInCartRequest = () => {
  return { type: DELETE_CART_REQUEST };
};
export const deleteProductInCartSuccess = () => {
  return { type: DELETE_CART_SUCCESS };
};
export const deleteProductInCartError = () => {
  return { type: DELETE_CART_ERROR };
};

export const deleteProductInCartRedux = (userId, productId) => {
  return async (dispatch, getState) => {
    dispatch(deleteProductInCartRequest());
    try {
      const res = await axios.delete(
        `${apiUrl}/cart/delete?userId=${userId}&productId=${productId}`
      );
      console.log(productId);
      if (res.data.success) {
        dispatch(deleteProductInCartSuccess());
        dispatch(fetchAllCartRedux(userId));
        alert("Xóa thành công.");
      }
    } catch (error) {
      dispatch(deleteProductInCartError());
    }
  };
};
