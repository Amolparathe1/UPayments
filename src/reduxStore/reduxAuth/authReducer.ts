import {SET_TOKEN} from './actionTypes';

const INITIAL_STATE = {
  authToken: '',
};
const AuthReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        authToken: action.token,
      });
    default:
      return state;
  }
};
export default AuthReducer;
