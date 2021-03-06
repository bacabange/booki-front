import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { loadProgressBar } from 'axios-progress-bar';
import {
  SET_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOAD_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from '../../types';

const AuthState = props => {
  const initialState = {
    access_token: localStorage.getItem('access_token'),
    isAuthenticated: localStorage.getItem('access_token') ? true : null,
    loading: false,
    user: null,
    error: null
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    dispatch({
      type: LOAD_USER,
      user
    });
  }

  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    try {
      setLoading();
      loadProgressBar();

      const res = await axios.post(`http://localhost:8080/api/v1/auth/login`, formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data
      });

    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data
      });
    }
  }

  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    try {
      setLoading();
      loadProgressBar();

      const res = await axios.post(`http://localhost:8080/api/v1/auth/register`, formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.data
      });

      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data
      });
    }
  };

  const logout = () => dispatch({ type: LOGOUT });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return <AuthContext.Provider
    value={{
      access_token: state.access_token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error,
      login,
      logout,
      loadUser,
      register
     }}
  >
    {props.children}
  </AuthContext.Provider>;
}

export default AuthState;