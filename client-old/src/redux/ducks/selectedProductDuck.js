//ACTIONS
export const setSelectedProduct = (product) => {
  return {
    type: "SET_SELECTED_PRODUCT",
    selectedProduct: product,
  };
};
//**REDUCER */

//initialState
const initialState = "sampleBugs";

const selectedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_PRODUCT":
      return action.selectedProduct;
    default:
      return state;
  }
};

export default selectedProductReducer;
