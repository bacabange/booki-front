import {
  SET_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOAD_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:

      localStorage.setItem('access_token', action.payload.access_token);
      localStorage.setItem('user', JSON.stringify({
        ...action.payload.user
      }));

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');

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
    case LOAD_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}