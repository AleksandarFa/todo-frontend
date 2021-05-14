import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import authReducer from "./auth/reducer";
import history from "../containers/App/history";

const rootReducer = combineReducers({
  router: connectRouter(history),
  authReducer,
});
export default rootReducer;
