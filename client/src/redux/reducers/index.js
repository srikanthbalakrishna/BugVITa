import showComponentReducer from "./showComponentReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  showComponent: showComponentReducer,
});

export default rootReducer;
