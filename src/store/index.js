import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

import { routerMiddleware } from "connected-react-router";
import history from "../containers/App/history";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const enhancers = [applyMiddleware(...middlewares)];

let store = createStore(rootReducer, {}, compose(...enhancers));

sagaMiddleware.run(rootSaga);
window.store = store;
export default store;
