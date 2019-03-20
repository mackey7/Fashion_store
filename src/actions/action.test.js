import * as actions from './actions';
import * as types from './action-types/action-types'

describe('actions', () => {
    it('sholud create  an action  add to cart', () => {
        const id = 1
        const expectedAction = {
            type: types.ADD_TO_CART,
            id
        }
        expect(actions.addToCart(id)).toEqual(expectedAction)
    })
    it('sholud create an action remove item', () => {
        const id = 1
        const expectedAction = {
            type: types.REMOVE_ITEM,
            id
        }
        expect(actions.removeItem(id)).toEqual(expectedAction)
    })
    it('should create an action change currency', () => {
        const e = "PLN"
        const expectedAction = {
            type: types.CHANAGE_CURRENCY,
            e
        }
        expect(actions.changeCurrency(e)).toEqual(expectedAction)
        
    });
})