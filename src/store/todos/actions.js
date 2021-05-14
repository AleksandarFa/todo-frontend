import { ALL_TODOS_REQUEST, ALL_TODOS_SUCCESS } from "./actionTypes";

export const requestAllTodos = () => {
  return {
    type: ALL_TODOS_REQUEST,
  };
};

export const AllTodosSuccess = ({ todos }) => {
  return {
    type: ALL_TODOS_SUCCESS,
    payload: todos,
  };
};
