//ACTIONS:
export const showBugsList = () => {
  return {
    type: "SHOW_BUGSLIST",
  };
};
export const showLogin = () => {
  return {
    type: "SHOW_LOGIN",
  };
};
export const showProductsList = () => {
  return {
    type: "SHOW_PRODUCTSLIST",
  };
};

//REDUCERS:
const initialState = "SHOW_LOGIN";

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
