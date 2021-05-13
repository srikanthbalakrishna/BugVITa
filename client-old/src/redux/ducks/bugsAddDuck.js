/**
 * Check out https://youtu.be/qA6oyQQTJ3I if you want to know about redux-thunk and async actions
 * Check out https://youtu.be/fn9Y76Naw_U if you want to know about DUCKS file structure for redux
 */

import axios from "axios";

/******* ACTIONS ****************************/
//[1] -- fetchbugsRequest -
const AddBugRequest = () => {
  return {
    type: "ADD_BUG_REQUEST",
  };
};
//[2] -- fetchBugsSuccess
const AddBugSuccess = () => {
  return {
    type: "ADD_BUG_SUCCESS",
  };
};
//[3] -- fetchBugsFailure
const AddBugFailure = (error) => {
  return {
    type: "ADD_BUG_FAILURE",
    payload: error,
  };
};

//[4] -- fetchProducts ASYNC action - 'thunk' middleware allows the action to return a
//                                     function instead of an object!
//This is the action that we will use when we are rendering the data in our components
//So this is basically our middleware!
//so, Inside our component, we can say:  dispatch(fetchProducts()) to update our state

export const AddBug = (bugToBePosted) => {
  return (dispatch) => {
    //before making API call, we dispatch:
    dispatch(AddBugRequest());
    axios
      .post("/api/bugs", bugToBePosted)
      .then((response) => {
        //We successfully got a response,so we'll dispatch:
        dispatch(AddBugSuccess());
      })
      .catch((error) => {
        //We were not able to get data because of some error. So we dispatch:
        dispatch(AddBugFailure(error.message));
      });
  };
};

/******* Reducer ****************************/

//initial State -- follows the REQUEST-SUCCESS-FAILURE pattern
const initialStateBugsAdding = {
  loading: false,
  error: "",
};

//Reducer function
const BugsAddingReducer = (state = initialStateBugsAdding, action) => {
  switch (action.type) {
    case "ADD_BUG_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_BUG_SUCCESS":
      return {
        loading: false,
        error: "",
      };
    case "ADD_BUG_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default BugsAddingReducer;
