import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, DELETE_PRODUCT_BASKET } from "../Components/actions/types";

const initialState = {
    basketNumbers: 0
}

export default(state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            return {
                basketNumbers: state.basketNumbers + 1
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case DELETE_PRODUCT_BASKET:
            return {
                basketNumbers: state.basketNumbers - 1
            }
        default:
            return state;
    }
}
