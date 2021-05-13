//ACTIONS:
export const setUserEmail = (email) => {
  return {
    type: "SET_USER_EMAIL",
    email: email,
  };
};

//
const initialState = ""; //email

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_EMAIL":
      return action.email;
    default:
      return state;
  }
};
export default userReducer;
