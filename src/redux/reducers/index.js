import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import error from "./error";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  status: isLoggedReducer,
  error: error,
});

export default rootReducer;
