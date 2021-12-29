import * as types from './type';

const initialState = {
  url: '',
  loading: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_URL:
      return Object.assign({}, state, {
        url: action.value,
      });
    default:
      return state;
  }
}

export default authReducer;
