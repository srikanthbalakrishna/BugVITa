const initialState = "SHOW_PRODUCTS";

const showComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_BUGSLIST":
      return "SHOW_BUGSLIST";
    case "SHOW_PRODUCTS":
      return "SHOW_PRODUCTS";
    default:
      return state;
  }
};

export default showComponentReducer;
