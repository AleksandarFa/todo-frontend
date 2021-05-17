import {
  ALL_TODOS_SUCCESS,
  SINGLE_TODO_SUCCESS,
  DELETE_TODO,
} from "./actionTypes";

export const initialState = {
  todos: [],
  todo: {
    title: "",
    description: "",
    priority_choices: "LOW",
    completed: false,
  },
};

const todoReducer = (state = initialState, { type, payload, todoId }) => {
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
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== todoId),
      };
    default:
      return state;
  }
};

export default todoReducer;
