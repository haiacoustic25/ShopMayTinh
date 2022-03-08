import {
  CALL_API_LAPTOP,
  CALL_API_PC,
  CALL_API_MOUSE,
} from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case CALL_API_LAPTOP:
      return { ...state, laptopData: action.payload };
    case CALL_API_PC:
      return { ...state, PCData: action.payload };
    case CALL_API_MOUSE:
      return { ...state, mouseData: action.payload };
    default:
      return state;
  }
};

export default reducer;
