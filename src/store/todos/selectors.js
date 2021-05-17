import { initialState } from "./reducer";
import { createSelector } from "reselect";

const selectTodo = (state) => state.todos || initialState;

const makeSelectAllTodos = () =>
  createSelector(selectTodo, (substate) => substate.todos);

const makeSelectSingleTodo = () =>
  createSelector(selectTodo, (substate) => substate.todo);

export { makeSelectAllTodos, makeSelectSingleTodo };
