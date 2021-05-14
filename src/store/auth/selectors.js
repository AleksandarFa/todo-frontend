import { createSelector } from "reselect";
import { initialState } from "./reducer";

export const selectAuth = (state) => state.authReducer || initialState;

const makeSelectRegistered = () =>
  createSelector(selectAuth, (substate) => substate.registerSuccess);

const makeSelectAuthenticated = () =>
  createSelector(selectAuth, (substate) => !!substate.token);

const makeSelectUser = () =>
  createSelector(selectAuth, (substate) => substate.user);

export { makeSelectRegistered, makeSelectAuthenticated, makeSelectUser };
