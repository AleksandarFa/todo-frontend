import { fork } from "redux-saga/effects";
import { authSaga } from "./auth/sagas";
import todoSaga from "./todos/sagas";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(todoSaga);
}
