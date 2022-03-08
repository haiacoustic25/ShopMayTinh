import { READ_DATA_CART } from "./constants";

export const callAPICart = (payload) => {
  return {
    type: READ_DATA_CART,
    payload,
  };
};
