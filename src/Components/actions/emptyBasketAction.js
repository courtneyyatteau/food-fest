import { EMPTY_BASKET } from "./types";

export const emptyBasket = () => {
  return (dispatch) => {
    console.log("Emptying basket");
    dispatch({
      type: EMPTY_BASKET,
    });
  };
};
