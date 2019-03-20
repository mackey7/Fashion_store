import reducer from './reducer';
import * as types from '../actions/action-types/action-types';
import productsArray from '../api/productsArray'

describe ('Cart reducer', ()=>{
   const  initialState =   {
             cart: [],
             products: productsArray,
             cartTotal: 0
            }
    it('should return the initial state', ()=>{
        expect(reducer(undefined, {})).toEqual(initialState);
    })
    it('should  handle ADD_TO_CART ', () => {
        expect(reducer([],types.ADD_TO_CART )).toEqual(initialState.cart, initialState.cartTotal );
    });
    it('should handle REMOVE_ITEM', () => {
    });
  

})