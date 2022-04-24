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
} from "../Action/type";

const INNITAL_SATE = {
  listCart: [],
  isDelete:false
};

const cartReducer = (state = INNITAL_SATE, action) => {
  switch (action.type) {
    //   create cart
    case CREATE_CART_REQUEST: {
      return {
        ...state,
      };
    }
    case CREATE_CART_SUCCESS: {
      return {
        ...state,
      };
    }
    case CREATE_CART_ERROR: {
      return {
        ...state,
      };
    }

    // fetch cart
    case FETCH_CART_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_CART_SUCCESS: {
      return {
        ...state,
        listCart: action.payload.products,
      };
    }
    case FETCH_CART_ERROR: {
      return {
        ...state,
      };
    }

    // delete product in cart
    case DELETE_CART_REQUEST:{
      return {
        ...state,
        isDelete:false
      }
    }
    case DELETE_CART_SUCCESS:{
      return {
        ...state,
        isDelete:true
      }
    }
    case DELETE_CART_ERROR:{
      return {
        ...state,
        isDelete:false
      }
    }

    default: {
      return { ...state };
    }
  }
};

export default cartReducer;
