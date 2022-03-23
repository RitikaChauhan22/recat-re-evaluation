import  ActionTypes  from "./actionTypes";
import { combineReducers } from "redux";

const initState = {
    products:[{
        id: 1,
        title: "Jeans",
        category: "clothes"
    }],
    isLoading:false,
    isError:false
}

const productReducer = (state = initState,{type, payload})=>{
    // add the switch statement for different actions

   switch (type) {
       case ActionTypes.GET_PRODUCTS_REQUEST:
           return state;
           default:
          return state;
   }

};

export const reducers = combineReducers({

    allProducts: productReducer,

})