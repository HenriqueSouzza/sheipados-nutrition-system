import { ActionProps } from "@/interface";
import { PRODUCT_FAILURE, PRODUCT_GET_SUCCESS, PRODUCT_REQUEST, PRODUCT_UPDATE_SUCCESS } from "./ProductTypes";

export const InitialStateProduct = {
  product: {},
  productList: [],
  loading: true,
  error: false,
};

export const ProductReducer = (state = InitialStateProduct, action: ActionProps) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        product: action.payload
      };
    case PRODUCT_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        productList: action.payload
      };
    case PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};