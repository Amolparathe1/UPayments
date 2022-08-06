import {combineReducers} from 'redux';
import AuthReducer from './reduxAuth/authReducer';
import DarkModeReducer from './reduxDarkMode/darkModeReducer';

const AppReducers = combineReducers({
  AuthReducer,
  DarkModeReducer,
});

const rootReducer = (state: any, action: any) => {
  return AppReducers(state, action);
};

export default rootReducer;
