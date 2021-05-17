import {
  ALL_TODOS_REQUEST,
  ALL_TODOS_SUCCESS,
  SINGLE_TODO_REQUEST,
  SINGLE_TODO_SUCCESS,
  CREATE_TODO,
  UPDATE_TODO,
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

export const singleTodoRequest = (todoId) => {
  return {
    type: SINGLE_TODO_REQUEST,
    payload: todoId,
  };
};

export const singleTodoSuccess = (todo) => {
  return {
    type: SINGLE_TODO_SUCCESS,
    payload: todo,
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

export const updateTodo = ({
  user,
  id,
  title,
  description,
  priority_choices,
  completed,
}) => {
  return {
    type: UPDATE_TODO,
    payload: { user, id, title, description, priority_choices, completed },
  };
};
