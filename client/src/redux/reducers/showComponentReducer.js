const initialState = "SHOW_PRODUCTSLIST";

const showComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_BUGSLIST":
      return "SHOW_BUGSLIST";
    case "SHOW_PRODUCTSLIST":
      return "SHOW_PRODUCTSLIST";
    case "SHOW_LOGIN":
      return "SHOW_LOGIN";
    default:
      return state;
  }
};

export default showComponentReducer;
