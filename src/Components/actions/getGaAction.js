import { GET_GA_PRODUCT } from "./types";

export const getGaNumbers = () => {
  return (dispatch) => {
    console.log("Getting GA numbers");
    dispatch({
      type: GET_GA_PRODUCT,
    });
  };
};
