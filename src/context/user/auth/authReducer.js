import {
  SET_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('access_token', action.payload.access_token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('access_token');
      return {
        ...state,
        access_token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}