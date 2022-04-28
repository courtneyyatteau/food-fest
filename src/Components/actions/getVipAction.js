import { GET_VIP_PRODUCT } from "./types";

export const getVipNumbers = () => {
  return (dispatch) => {
    console.log("Getting VIP numbers");
    dispatch({
      type: GET_VIP_PRODUCT,
    });
  };
};
