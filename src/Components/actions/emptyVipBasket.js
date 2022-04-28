import { EMPTY_VIP_BASKET } from "./types";

export const emptyVipBasket = () => {
  return (dispatch) => {
    console.log("Emptying VIP basket");
    dispatch({
      type: EMPTY_VIP_BASKET,
    });
  };
};
