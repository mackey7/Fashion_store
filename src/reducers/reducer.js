import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY_TO_CART } from '../actions/action-types/action-types';
import productsArray from '../api/productsArray'


const initState = {
    cart: [],
    products: productsArray,
    cartTotal: 0

}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let addedProduct = state.products.find(item => item.id === action.id);
            let existedProduct = state.cart.find(item => action.id === item.id)
            if (existedProduct) {
                addedProduct.quantity += 1
                return {
                    ...state,
                    cartTotal: state.cartTotal + addedProduct.price
                }
            } else {
                addedProduct.quantity = 1;
                let newTotal = state.cartTotal + addedProduct.price
                return {
                    ...state, cart: [...state.cart, addedProduct],
                    cartTotal: newTotal
                }
            }

        }
        case REMOVE_ITEM: {
            let productToRemove = state.cart.find(item => action.id === item.id)
            let new_Array = state.cart.filter(item => action.id !== item.id)
            let NewCartTotal = state.cartTotal - (productToRemove.price * productToRemove.quantity)
            return {
                ...state, cart: new_Array,
                cartTotal: NewCartTotal

            }
        }

        default:
            return state

    }

}
export default reducer