import { combineReducers } from "redux";
import showComponentReducer from "./showComponentDuck";
import productReducer from "./productsDuck";
import selectedProductReducer from "./selectedProductDuck";
import bugReducer from "./bugsDuck";
/**
 * This creates a 'root' reducer that combines all our reducers into
 * one reducer that we can use to create our store
 */

const rootReducer = combineReducers({
  showComponent: showComponentReducer,
  products: productReducer,
  selectedProduct: selectedProductReducer,
  bugsByProduct: bugReducer,
});

export default rootReducer;
