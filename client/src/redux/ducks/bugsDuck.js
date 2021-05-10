/**
 * Check out https://youtu.be/qA6oyQQTJ3I if you want to know about redux-thunk and async actions
 * Check out https://youtu.be/fn9Y76Naw_U if you want to know about DUCKS file structure for redux
 */

import axios from "axios";

/******* ACTIONS ****************************/
//[1] -- fetchBugsRequest -
const fetchBugsRequest = () => {
  return {
    type: "FETCH_BUGS_REQUEST",
  };
};
//[2] -- fetchBugsSuccess
const fetchBugsSuccess = (bugs) => {
  return {
    type: "FETCH_BUGS_SUCCESS",
    payload: bugs,
  };
};
//[3] -- fetchBugsFailure
const fetchBugsFailure = (error) => {
  return {
    type: "FETCH_BUGS_FAILURE",
    payload: error,
  };
};

//[4] -- fetchBugs ASYNC action - 'thunk' middleware allows the action to return a
//                                     function instead of an object!
//This is the action that we will use when we are rendering the data in our components
//So this is basically our middleware!
//so, Inside our component, we can say:  dispatch(fetchBugs("Apple")) to update our state
export const fetchBugs = (product) => {
  return (dispatch) => {
    //before making API call, we dispatch:
    dispatch(fetchBugsRequest());
    axios
      .get(`/api/products/${product}`) //fetch bugs belonging to the specified product
      .then((response) => {
        const bugs = response.data;
        //We successfully got a response,so we'll dispatch:
        dispatch(fetchBugsSuccess(bugs));
      })
      .catch((error) => {
        const errorMsg = error.message;
        //We were not able to get data because of some error. So we dispatch:
        dispatch(fetchBugsFailure(errorMsg));
      });
  };
};

/******* Reducer ****************************/

//initial State -- follows the REQUEST-SUCCESS-FAILURE pattern
const initialState = {
  loading: true,
  bugs: [], //initially no bugs are there
  error: "",
};

//Reducer function
const bugReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BUGS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_BUGS_SUCCESS":
      return {
        loading: false,
        bugs: action.payload,
        error: "",
      };
    case "FETCH_BUGS_FAILURE":
      return {
        loading: false,
        bugs: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bugReducer;
