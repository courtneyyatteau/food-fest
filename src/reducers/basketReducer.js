import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  DELETE_PRODUCT_BASKET,
  EMPTY_BASKET,
} from "../Components/actions/types";

const initialState = {
  basketNumbers: 0,
};

function basket(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      return {
        basketNumbers: state.basketNumbers + 1,
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    case DELETE_PRODUCT_BASKET:
      if (state.basketNumbers === 0) {
        return {
          basketNumbers: 0,
        };
      } else {
        return {
          basketNumbers: state.basketNumbers - 1,
        };
      }
    case EMPTY_BASKET:
      return initialState;
    default:
      return {
        basketNumbers: state.basketNumbers,
      };
  }
}

export default basket;
