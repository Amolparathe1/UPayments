import {combineReducers} from 'redux';
import AuthReducer from './reduxAuth/authReducer';
import DarkModeReducer from './reduxDarkMode/darkModeReducer';
import ProductReducer from './product/productReducer';
const AppReducers = combineReducers({
  AuthReducer,
  DarkModeReducer,
  ProductReducer,
});

const rootReducer = (state: any, action: any) => {
  return AppReducers(state, action);
};

export default rootReducer;
