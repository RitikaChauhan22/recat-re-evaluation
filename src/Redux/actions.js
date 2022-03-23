import ActionTypes from "./actionTypes";


// action for get products request
export const getProductsReq = (products) => {

  return {
      type: ActionTypes.GET_PRODUCTS_REQUEST,
      payload: products,
  }

};

// action for get products success

export const getProductsSuccess = (products) => {

    return {
        type: ActionTypes.GET_PRODUCTS_SUCCESS,
        payload: products,
    }

};

// action for get products failure

export const getProductsFailure = (products) => {

    return {
        type: ActionTypes.GET_PRODUCTS_FAILURE,
        payload: false,
    }

};

// thunk call to fetch products  list
export const getproductsData = () => ({



});

// action object for sort  feature

export const sortProducts = () => ({});
