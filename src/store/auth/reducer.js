import {
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  SET_TOKEN,
  FETCH_USER_SUCCESS,
  SET_AUTHENTICATED,
} from "./actionTypes";

import { getItem } from "../../utils/localStorage";

export const initialState = {
  user: null,
  registerSuccess: false,
  token: getItem("token") || null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        user: payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: null,
        token: null,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
