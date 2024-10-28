import { useReducer } from "react";
import { InitialStateProduct, ProductReducer, useProductActions } from "@/store";
import { useAuth } from "./useAuth";

export const useProducts = () => {
  const [state, dispatch] = useReducer(ProductReducer, InitialStateProduct);
  const { profile: { accessToken } } = useAuth();
  const { onUpdate, onCreate, onDelete, onGet } = useProductActions(dispatch, accessToken);

  return { ...state, onUpdate, onCreate, onDelete, onGet }
}