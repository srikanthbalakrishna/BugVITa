import rootReducer from "../ducks/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
//store passed to Provider in 'client/src/index.js'
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
