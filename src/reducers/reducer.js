import { ADD_TO_CART, REMOVE_ITEM } from '../actions/action-types/action-types';
import productsArray from '../api/productsArray'


const initState = {
    cart: [],
    products: productsArray

}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let addedProduct = state.products.find(item => item.id === action.id);
            return {
                ...state, cart: [...state.cart, addedProduct]
            }
        }
        case REMOVE_ITEM: {
            let new_Array = state.cart.filter(item => action.id !== item.id)
            return {
                ...state, cart: new_Array
            }
        }
        default:
            return state

    }

}
export default reducer