import { Dispatch, useCallback } from "react";
import { USER_FAILURE, USER_GET_SUCCESS, USER_REQUEST, USER_UPDATE_SUCCESS } from "./UserTypes";
import { ActionProps } from "@/interface";
import { useHttp } from "@/hooks";
import { CreateUserProps, UpdateUserProps } from "@/contexts";

export const useUserActions = (dispatch: Dispatch<ActionProps>) => {
  const axios = useHttp();

  const onUpdate = async ({ username, data }: UpdateUserProps) => {
    dispatch({ type: USER_REQUEST });
    try {
      const response = await axios.put(`/users/${username}`, data)
      dispatch({ type: USER_UPDATE_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: USER_FAILURE, payload: { error: true } });
    }
  };

  const onGet = useCallback(async (username?: string) => {
    dispatch({ type: USER_REQUEST });
    try {
      const response = await axios.get(`/users/${username ?? ''}`)
      dispatch({ type: USER_GET_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: USER_FAILURE, payload: { error: true } });
    }
  }, [dispatch, axios]);

  const onCreate = async (data: CreateUserProps) => {
    dispatch({ type: USER_REQUEST });
    try {
      await axios.post('/users', data);
    } catch {
      dispatch({ type: USER_FAILURE, payload: { error: true } });
    }
  };

  const onDelete = async (username: string) => {
    dispatch({ type: USER_REQUEST });
    try {
      await axios.delete(`/users/${username}`);
    } catch {
      dispatch({ type: USER_FAILURE, payload: { error: true } });
    }
  };

  return { onCreate, onGet, onUpdate, onDelete }
}