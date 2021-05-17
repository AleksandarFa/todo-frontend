import { put, call, takeLatest } from "redux-saga/effects";
import UserApiService from "../../api/userApiService";
import { push } from "connected-react-router";
import { LOGIN, DASHBOARD } from "../../routes";

import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  FETCH_USER_REQUEST,
} from "./actionTypes";

import {
  registerSuccess,
  setToken,
  fetchAuthUser,
  fetchAuthUserSuccess,
  loginSuccess,
  logoutSuccess,
} from "../auth/actions";

import { removeItem } from "../../utils/localStorage";

export function* register({ payload }) {
  try {
    let userData = {
      ...payload,
      first_name: payload.firstName,
      last_name: payload.lastName,
    };
    const response = yield call(UserApiService.createUser, userData);
    yield put(registerSuccess(true));
    yield put(push(LOGIN));
  } catch (err) {
    console.log(err);
  }
}

export function* login({ payload }) {
  try {
    const { data } = yield call(UserApiService.loginUser, payload);
    yield put(setToken(data.access));
    yield put(fetchAuthUser());
    yield put(loginSuccess());
    yield put(push(DASHBOARD));
  } catch (err) {
    console.log(err);
  }
}

export function* logout() {
  removeItem("token");
  yield put(logoutSuccess());
  yield put(push(LOGIN));
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
  yield takeLatest(LOGOUT_REQUEST, logout);
  yield takeLatest(FETCH_USER_REQUEST, fetchUser);
}
