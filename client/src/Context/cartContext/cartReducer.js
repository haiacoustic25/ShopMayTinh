import { READ_DATA_CART } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case READ_DATA_CART:
      return { ...state, initCart: action.payload };
  }
};

export default reducer;
