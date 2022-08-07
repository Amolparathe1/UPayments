import {SET_PRODUCT, SET_CATEGORIES} from './actionTypes';

const INITIAL_STATE = {
  Product: [],
  category: [],
};
const ProductReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_PRODUCT:
      return Object.assign({}, state, {
        Product: action.data,
      });
    case SET_CATEGORIES:
      return Object.assign({}, state, {
        category: action.data,
      });
    default:
      return state;
  }
};
export default ProductReducer;
