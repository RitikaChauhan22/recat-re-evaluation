import axios from "axios";
import {
  GET_CLICKED_PRODUCT_FAILURE,
  GET_CLICKED_PRODUCT_REQUEST,
  GET_CLICKED_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  SORT_PRODUCT,
} from "./actionTypes";

// action for get products request
export const getProductsReq = () => ({
  type: GET_PRODUCT_REQUEST,
});

// action for get products success

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCT_SUCCESS,
  payload,
});

// action for get products failure

export const getProductsFailure = () => ({
  type: GET_PRODUCT_FAILURE,
});

// thunk call to fetch products  list
export const getproductsData = () => {

  return (dispatch) => {

    dispatch(getProductsReq());
    axios
      .get("https://movie-fake-server.herokuapp.com/products")

      .then((res) => {
        
        dispatch(getProductsSuccess(res.data));
      })

      .catch((error) => {
        dispatch(getProductsFailure());
        console.log(error);
      });
  };
};

// action object for sort  feature

export const sortProducts = (payload) => ({
  type: SORT_PRODUCT,
  payload,
});



//Clicked data request actions

export const getClickedProductsReq = () => ({
  type: GET_CLICKED_PRODUCT_REQUEST,
});

// action for get products success

export const getClickedProductsSuccess = (payload) => ({
  type: GET_CLICKED_PRODUCT_SUCCESS,
  payload,
});

// action for get products failure

export const getClickedProductsFailure = () => ({
  type: GET_CLICKED_PRODUCT_FAILURE,
});

// thunk call to fetch products  list
export const getClickedproductData = (id) => {
 
  return (dispatch) => {
   
    dispatch(getClickedProductsReq());
    axios
      .get(`https://movie-fake-server.herokuapp.com/products/${id}`)
      .then((res) => {
       
        dispatch(getClickedProductsSuccess(res.data));

      })

      .catch((error) => {
        dispatch(getClickedProductsFailure());
        console.log(error);
      });
  };
};
