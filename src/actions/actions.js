import { ADD_TO_CART, REMOVE_ITEM, CHANAGE_CURRENCY } from './action-types/action-types';

export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        id
    }
}
export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const changeCurrency = e => {
    return {
        type: CHANAGE_CURRENCY,
        e
    }
}