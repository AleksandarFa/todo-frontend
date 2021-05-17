import { put, call, takeLatest } from "@redux-saga/core/effects";
import { push } from "connected-react-router";
import UserApiService from "../../api/userApiService";
import { ALL_TODOS_REQUEST, CREATE_TODO } from "./actionTypes";
import { AllTodosSuccess } from "./actions";
import { DASHBOARD } from "../../routes";

export function* allTodosRequest() {
  try {
    const response = yield call(UserApiService.fetchAllUserTodos);
    yield put(AllTodosSuccess(response));
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

export default function* todoSaga() {
  yield takeLatest(ALL_TODOS_REQUEST, allTodosRequest);
  yield takeLatest(CREATE_TODO, createTodo);
}
