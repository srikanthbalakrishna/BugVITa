import rootReducer from "../reducers/index";
import { createStore } from "redux";
//store passed to Provider in 'client/src/index.js'
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
