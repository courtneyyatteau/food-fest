import { ADD_VIP_PRODUCT } from "../Components/actions/types";
import { DELETE_VIP_PRODUCT } from "../Components/actions/types";
import { GET_VIP_PRODUCT } from "../Components/actions/types";

const initialState = {
  vipNumbers: 0,
};

function vip(state = initialState, action) {
  switch (action.type) {
    case ADD_VIP_PRODUCT:
      return {
        vipNumbers: state.vipNumbers + 1,
      };
    case GET_VIP_PRODUCT:
      return {
        ...state,
      };
    case DELETE_VIP_PRODUCT:
      if (state.vipNumbers === 0) {
        return {
          vipNumbers: 0,
        };
      } else {
        return {
          vipNumbers: state.vipNumbers - 1,
        };
      }
    default:
      return {
        vipNumbers: state.vipNumbers,
      };
  }
}

export default vip;
