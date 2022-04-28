import { EMPTY_GA_BASKET } from "./types";

export const emptyGaBasket = () => {
  return (dispatch) => {
    console.log("Emptying GA basket");
    dispatch({
      type: EMPTY_GA_BASKET,
    });
  };
};
