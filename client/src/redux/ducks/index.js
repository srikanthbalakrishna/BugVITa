import showComponentReducer from "./showComponentDuck";
import productReducer from "./productsDuck";
import { combineReducers } from "redux";
/**
 * This creates a 'root' reducer that combines all our reducers into
 * one reducer that we can use to create our store
 */

const rootReducer = combineReducers({
  showComponent: showComponentReducer,
  products: productReducer,
});

export default rootReducer;
