import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SET_TOKEN,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./actionTypes";

export const registerUser = ({
  firstName,
  lastName,
  username,
  email,
  password,
}) => {
  return {
    type: REGISTER_REQUEST,
    payload: { firstName, lastName, username, email, password },
  };
};

export const registerSuccess = (success) => {
  return {
    type: REGISTER_SUCCESS,
    payload: success,
  };
};

export const loginUser = ({ username, password }) => {
  return {
    type: LOGIN_REQUEST,
    payload: { username, password },
  };
};

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const fetchAuthUser = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchAuthUserSuccess = ({ first_name, last_name }) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: { first_name, last_name },
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
