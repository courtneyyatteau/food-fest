import { ADD_VIP_PRODUCT } from "./types";

export const addVIP = () => {
  return (dispatch) => {
    console.log("Adding to VIP");
    dispatch({
      type: ADD_VIP_PRODUCT,
    });
  };
};
