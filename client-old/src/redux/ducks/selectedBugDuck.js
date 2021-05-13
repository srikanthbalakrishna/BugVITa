//ACTIONS
export const setSelectedBug = (bug) => {
  return {
    type: "SET_SELECTED_BUG",
    selectedBug: bug,
  };
};
//**REDUCER */

//initialState
const initialState = "";

const selectedBugReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_BUG":
      return action.selectedBug;
    default:
      return state;
  }
};

export default selectedBugReducer;
