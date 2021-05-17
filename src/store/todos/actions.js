import {
  ALL_TODOS_REQUEST,
  ALL_TODOS_SUCCESS,
  CREATE_TODO,
} from "./actionTypes";

export const requestAllTodos = () => {
  return {
    type: ALL_TODOS_REQUEST,
  };
};

export const AllTodosSuccess = (todos) => {
  return {
    type: ALL_TODOS_SUCCESS,
    payload: todos,
  };
};

export const createTodo = ({
  user,
  title,
  description,
  priority_choices,
  completed,
}) => {
  return {
    type: CREATE_TODO,
    payload: { user, title, description, priority_choices, completed },
  };
};
