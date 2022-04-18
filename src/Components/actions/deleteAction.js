import { DELETE_PRODUCT_BASKET } from './types';

export const deleteBasket = () => {
    return (dispatch) => {
        console.log("Deleting from Basket")
        dispatch({
            type: DELETE_PRODUCT_BASKET
        })
    }
}
