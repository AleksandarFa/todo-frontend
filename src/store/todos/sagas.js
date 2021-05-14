import { put, call, takeLatest } from "@redux-saga/core/effects";
import UserApiService from "../../api/userApiService";
import { ALL_TODOS_REQUEST } from "./actionTypes";
import { AllTodosSuccess } from "./actions";

export function* allTodosRequest() {
  try {
    const response = yield call(UserApiService.fetchAllUserTodos);
    console.log(UserApiService);
    yield put(AllTodosSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export default function* todoSaga() {
  yield takeLatest(ALL_TODOS_REQUEST, allTodosRequest);
}
