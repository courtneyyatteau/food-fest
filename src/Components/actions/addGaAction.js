import { ADD_GA_PRODUCT } from "./types";

export const addGA = () => {
  return (dispatch) => {
    console.log("Adding to GA");
    dispatch({
      type: ADD_GA_PRODUCT,
    });
  };
};
