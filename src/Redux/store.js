import { applyMiddleware, createStore } from "redux";
import { reducers } from "./reducer";

import thunk from 'redux-thunk';
 const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


if (window.Cypress) {
    window.store = store
  }


  export default store;

  

