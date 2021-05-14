import { ALL_TODOS_SUCCESS } from "./actionTypes";

export const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
