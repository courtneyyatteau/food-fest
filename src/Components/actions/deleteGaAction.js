import { DELETE_GA_PRODUCT } from "./types";

export const deleteGA = () => {
  return (dispatch) => {
    console.log("Deleting from GA");
    dispatch({
      type: DELETE_GA_PRODUCT,
    });
  };
};
