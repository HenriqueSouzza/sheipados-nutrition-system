import { Dispatch, useCallback } from "react";
import { PRODUCT_FAILURE, PRODUCT_GET_DETAIL_SUCCESS, PRODUCT_GET_SUCCESS, PRODUCT_REQUEST } from "./ProductTypes";
import { ActionProps, ProductsDataProps } from "@/interface";
import { InstanceAxios } from "@/lib";

interface ProductsRequestProps {
  code: string
  body: ProductsDataProps
}

export const useProductActions = (dispatch: Dispatch<ActionProps>, accessToken?: string) => {
  const onUpdate = async ({ code, body }: { code: string, body: ProductsDataProps }) => {
    dispatch({ type: PRODUCT_REQUEST });
    try {
      const response = await InstanceAxios.put(`/products/${code}`, body, { headers: { Authorization: `Bearer ${accessToken}` } })
      dispatch({ type: PRODUCT_GET_DETAIL_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: PRODUCT_FAILURE, payload: { error: true } });
    }
  }
  const onGet = useCallback(async (code?: string) => {
    dispatch({ type: PRODUCT_REQUEST });
    try {
      const response = await InstanceAxios.get(`/products/${code ?? ''}`, { headers: { Authorization: `Bearer ${accessToken}` } })
      dispatch({ type: code ? PRODUCT_GET_DETAIL_SUCCESS : PRODUCT_GET_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: PRODUCT_FAILURE, payload: { error: true } });
    }
  }, [dispatch, accessToken]);

  const onCreate = async (body: ProductsRequestProps['body']) => {
    dispatch({ type: PRODUCT_REQUEST });
    try {
      await InstanceAxios.post('/products', body, { headers: { Authorization: `Bearer ${accessToken}` } });
    } catch {
      dispatch({ type: PRODUCT_FAILURE, payload: { error: true } });
    }
  }

  const onDelete = async (code: ProductsRequestProps['code']) => {
    dispatch({ type: PRODUCT_REQUEST });
    try {
      await InstanceAxios.delete(`/products/${code}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    } catch {
      dispatch({ type: PRODUCT_FAILURE, payload: { error: true } });
    }
  };

  return { onCreate, onGet, onUpdate, onDelete }
}