import {SET_PRODUCT, SET_CATEGORIES, SET_LIST_CATEGORIES} from './actionTypes';

export const setProductList = (data: any) => ({
  type: SET_PRODUCT,
  data,
});

export const setCategoriesList = (data: any) => ({
  type: SET_CATEGORIES,
  data,
});
export const setCategories = (data: any) => ({
  type: SET_LIST_CATEGORIES,
  data,
});
