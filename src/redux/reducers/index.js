import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  status: isLoggedReducer,
});

export default rootReducer;
