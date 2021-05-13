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
export const showBugAdd = () => {
  return {
    type: "SHOW_BUGADD",
  };
};
export const showBugAddedScreen = () => {
  return {
    type: "SHOW_Bug_Added_Screen",
  };
};
export const showBugReport = () => {
  return {
    type: "SHOW_BUGREPORT",
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
    case "SHOW_BUGADD":
      return "SHOW_BUGADD";
    case "SHOW_Bug_Added_Screen":
      return "SHOW_Bug_Added_Screen";
    case "SHOW_BUGREPORT":
      return "SHOW_BUGREPORT";
    default:
      return state;
  }
};

export default showComponentReducer;
