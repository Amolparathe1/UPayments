import InstanceToken from '../../util/axiostoken';
import {Urls} from '../../util/url';
import {
  setProductList,
  setCategoriesList,
  setCategories,
} from '../../reduxStore/product/productAction';

export const getProductList = () => {
  return (dispatch: any) => {
    InstanceToken.get(Urls.products)
      .then(res => {
        //product data store in redux
        dispatch(setProductList(res.data.products));
      })
      .catch(error => {});
  };
};

export const getProductById = () => {
  return (dispatch: any) => {
    InstanceToken.get(Urls.products + '/62e81e2a49ad2578fbb6b57f')
      .then(res => {})
      .catch(error => {});
  };
};

export const Categories = () => {
  return (dispatch: any) => {
    InstanceToken.get(Urls.categories)
      .then(res => {
        //adding all category first
        var a = res.data.categories;
        a.unshift({name: 'All', _id: '0'});
        //data store in redux
        dispatch(setCategories(res.data.categories));
        dispatch(setCategoriesList(a));
      })
      .catch(error => {});
  };
};

export const CategoriesById = () => {
  return (dispatch: any) => {
    InstanceToken.get(Urls.categories + '/62e638fd1126b53e1c7deb65')
      .then(res => {})
      .catch(error => {});
  };
};
