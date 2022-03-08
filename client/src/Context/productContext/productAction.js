import {
  CALL_API_LAPTOP,
  CALL_API_PC,
  CALL_API_MOUSE,
} from "./constants";

export const callAPILaptop = (payload) => {
  return {
    type: CALL_API_LAPTOP,
    payload,
  };
};

export const callAPIPC = (payload) => {
  return {
    type: CALL_API_PC,
    payload,
  };
};
export const callAPIMouse = (payload) => {
  return {
    type: CALL_API_MOUSE,
    payload,
  };
};
