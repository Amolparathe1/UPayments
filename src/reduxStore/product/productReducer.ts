import {SET_PRODUCT, SET_CATEGORIES, SET_LIST_CATEGORIES} from './actionTypes';

const INITIAL_STATE = {
  Product: [],
  category: [],
  categoryList: [],
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
    case SET_LIST_CATEGORIES:
      return Object.assign({}, state, {
        categoryList: action.data,
      });
    default:
      return state;
  }
};
export default ProductReducer;
