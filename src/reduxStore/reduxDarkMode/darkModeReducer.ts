import {SET_MODE} from './actionTypes';

const INITIAL_STATE = {
  mode: 'dark',
};
const DarkModeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_MODE:
      return Object.assign({}, state, {
        mode: action.token,
      });
    default:
      return state;
  }
};
export default DarkModeReducer;
