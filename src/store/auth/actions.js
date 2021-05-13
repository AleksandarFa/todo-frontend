import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
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
