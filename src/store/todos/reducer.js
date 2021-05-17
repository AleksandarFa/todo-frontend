import { ALL_TODOS_SUCCESS, SINGLE_TODO_SUCCESS } from "./actionTypes";

export const initialState = {
  todos: [],
  todo: {
    title: "",
    description: "",
    priority_choices: "LOW",
    completed: false,
  },
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
      };
    case SINGLE_TODO_SUCCESS:
      return {
        ...state,
        todo: payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
