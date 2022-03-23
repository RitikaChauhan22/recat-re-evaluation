import {
  GET_CLICKED_PRODUCT_FAILURE,
  GET_CLICKED_PRODUCT_REQUEST,
  GET_CLICKED_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  SORT_PRODUCT,
} from "./actionTypes";

const initState = {
  products: [],
  isLoading: false,
  isError: false,
  sortedProds: [],
  clickedProd: [],
};

export const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: [...payload],
        sortedProds: [...payload],
        isError: false,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case SORT_PRODUCT:
      if (payload == "--sort by --")
        return {
          ...state,
          sortedProds: [...state.products],
        };
      else if (payload == "asc")
        return {
          ...state,
          sortedProds: [...state.sortedProds
            .sort((a, b) => 
            a.price - b.price
            )],
        };
      else if (payload == "desc")
        return {
          ...state,
          sortedProds: [...state.sortedProds
            .sort((a, b) => b.price - a.price
            )],
        };

    case GET_CLICKED_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CLICKED_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clickedProd: payload,
        isError: false,
      };
    case GET_CLICKED_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
