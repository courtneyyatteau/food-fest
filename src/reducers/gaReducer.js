import { ADD_GA_PRODUCT } from "../Components/actions/types";
import { DELETE_GA_PRODUCT } from "../Components/actions/types";
import { GET_GA_PRODUCT } from "../Components/actions/types";

const initialState = {
  gaNumbers: 0,
};

function ga(state = initialState, action) {
  switch (action.type) {
    case ADD_GA_PRODUCT:
      return {
        gaNumbers: state.gaNumbers + 1,
      };
    case GET_GA_PRODUCT:
      return {
        ...state,
      };
    case DELETE_GA_PRODUCT:
      if (state.gaNumbers === 0) {
        return {
          gaNumbers: 0,
        };
      } else {
        return {
          gaNumbers: state.gaNumbers - 1,
        };
      }
    default:
      return {
        gaNumbers: state.gaNumbers,
      };
  }
}

export default ga;
