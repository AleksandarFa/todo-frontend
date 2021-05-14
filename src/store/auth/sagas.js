import { put, call, takeLatest } from "redux-saga/effects";
import UserApiService from "../../api/userApiService";
import history from "../../containers/App/history";
import { LOGIN, DASHBOARD } from "../../routes";
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  FETCH_USER_REQUEST,
} from "./actionTypes";

import {
  registerSuccess,
  setToken,
  fetchAuthUser,
  fetchAuthUserSuccess,
} from "../auth/actions";

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
    yield put(setToken(response.access));
    yield put(fetchAuthUser());
    history.push(DASHBOARD);
  } catch (err) {
    console.log(err);
  }
}

export function* fetchUser() {
  try {
    const user = yield call(UserApiService.fetchUserData);
    yield put(fetchAuthUserSuccess(user));
  } catch (err) {
    console.log(err);
  }
}

export function* authSaga() {
  yield takeLatest(REGISTER_REQUEST, register);
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(FETCH_USER_REQUEST, fetchUser);
}
