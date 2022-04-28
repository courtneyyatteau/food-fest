import { DELETE_VIP_PRODUCT } from "./types";

export const deleteVIP = () => {
  return (dispatch) => {
    console.log("Deleting from VIP");
    dispatch({
      type: DELETE_VIP_PRODUCT,
    });
  };
};
