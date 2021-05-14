import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import authReducer from "./auth/reducer";
import todoReducer from "./todos/reducer";
import history from "../containers/App/history";

const rootReducer = combineReducers({
  router: connectRouter(history),
  todos: todoReducer,
  authReducer,
});
export default rootReducer;
