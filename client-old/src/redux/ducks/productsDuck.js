/**
 * Check out https://youtu.be/qA6oyQQTJ3I if you want to know about redux-thunk and async actions
 * Check out https://youtu.be/fn9Y76Naw_U if you want to know about DUCKS file structure for redux
 */

import axios from "axios";

/******* ACTIONS ****************************/
//[1] -- fetchProductsRequest -
const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};
//[2] -- fetchProductsSuccess
const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
  };
};
//[3] -- fetchProductsFailure
const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error,
  };
};

//[4] -- fetchProducts ASYNC action - 'thunk' middleware allows the action to return a
//                                     function instead of an object!
//This is the action that we will use when we are rendering the data in our components
//So this is basically our middleware!
//so, Inside our component, we can say:  dispatch(fetchProducts()) to update our state
export const fetchProducts = () => {
  return (dispatch) => {
    //before making API call, we dispatch:
    dispatch(fetchProductsRequest());
    axios
      .get("/api/products")
      .then((response) => {
        const products = response.data;
        //We successfully got a response,so we'll dispatch:
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        //We were not able to get data because of some error. So we dispatch:
        dispatch(fetchProductsFailure(errorMsg));
      });
  };
};

/******* Reducer ****************************/

//initial State -- follows the REQUEST-SUCCESS-FAILURE pattern
const initialState = {
  loading: true,
  products: [],
  error: "",
};

//Reducer function
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        loading: false,
        products: action.payload,
        error: "",
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
