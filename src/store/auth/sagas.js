import { put, call, takeLatest } from "redux-saga/effects";
import UserApiService from "../../api/userApiService";
import history from "../../containers/App/history";
import { LOGIN } from "../../routes";
import { LOGIN_REQUEST, REGISTER_REQUEST } from "./actionTypes";
import { registerSuccess } from "./actions";
import { Provider } from "react-redux";

export function* register({ payload }) {
  try {
    let userData = {
      ...payload,
      first_name: payload.firstName,
      last_name: payload.lastName,
    };
    const response = yield call(UserApiService.createUser, userData);
    yield put(registerSuccess(true));
    history.push(LOGIN);
  } catch (err) {
    console.log(err);
  }
}

export function* login({ payload }) {
  try {
    const response = yield call(UserApiService.loginUser, payload);
    console.log("Saga", response);
  } catch (err) {
    console.log(err);
  }
}

export function* authSaga() {
  yield takeLatest(REGISTER_REQUEST, register);
  yield takeLatest(LOGIN_REQUEST, login);
}
