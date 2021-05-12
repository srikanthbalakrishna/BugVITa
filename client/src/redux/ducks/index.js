import { combineReducers } from "redux";
import showComponentReducer from "./showComponentDuck";
import productReducer from "./productsDuck";
import selectedProductReducer from "./selectedProductDuck";
import bugReducer from "./bugsDuck";
import BugsAddingReducer from "./bugsAddDuck";
/**
 * This creates a 'root' reducer that combines all our reducers into
 * one reducer that we can use to create our store
 */

const rootReducer = combineReducers({
  showComponent: showComponentReducer,
  products: productReducer,
  selectedProduct: selectedProductReducer,
  bugsByProduct: bugReducer,
  bugAdd: BugsAddingReducer,
});

export default rootReducer;
