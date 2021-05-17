import { put, call, takeLatest } from "@redux-saga/core/effects";
import { push } from "connected-react-router";
import UserApiService from "../../api/userApiService";
import {
  ALL_TODOS_REQUEST,
  CREATE_TODO,
  SINGLE_TODO_REQUEST,
  UPDATE_TODO,
  DELETE_TODO,
} from "./actionTypes";

import { allTodosSuccess, singleTodoSuccess } from "./actions";
import { DASHBOARD } from "../../routes";

export function* allTodosRequest() {
  try {
    const response = yield call(UserApiService.fetchAllUserTodos);
    yield put(allTodosSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* singleTodoRequest(currentTodo) {
  try {
    const response = yield call(
      UserApiService.fetchCurrentTodo,
      currentTodo.payload
    );
    yield put(singleTodoSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* createTodo(newTodo) {
  try {
    const response = yield call(UserApiService.createTodo, newTodo.payload);
    yield put(push(DASHBOARD));
  } catch (err) {
    console.log(err);
  }
}

export function* updateTodo(newTodo) {
  const todoData = newTodo.payload;
  const todoId = todoData.id;
  try {
    const response = yield call(UserApiService.updateTodo, todoId, todoData);
    yield put(push(DASHBOARD));
  } catch (err) {
    console.log(err);
  }
}

export function* deleteTodo(payload) {
  try {
    const response = yield call(UserApiService.deleteTodo, payload.todoId);
    yield put(push(DASHBOARD));
  } catch (err) {
    console.log(err);
  }
}

export default function* todoSaga() {
  yield takeLatest(ALL_TODOS_REQUEST, allTodosRequest);
  yield takeLatest(CREATE_TODO, createTodo);
  yield takeLatest(SINGLE_TODO_REQUEST, singleTodoRequest);
  yield takeLatest(UPDATE_TODO, updateTodo);
  yield takeLatest(DELETE_TODO, deleteTodo);
}
