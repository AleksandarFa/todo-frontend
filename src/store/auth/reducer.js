import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
} from "./actionTypes";

export const initialState = {
  user: null,
  registerSuccess: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        user: payload,
      };
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
    default:
      return state;
  }
};
