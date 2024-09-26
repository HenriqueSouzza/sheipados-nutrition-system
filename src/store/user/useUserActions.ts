import { Dispatch, useCallback } from "react";
import { USER_FAILURE, USER_GET_SUCCESS, USER_REQUEST, USER_UPDATE_SUCCESS } from "./UserTypes";
import { ActionProps } from "@/interface";
import { CreateUserProps, UpdateUserProps } from "@/contexts";
import { InstanceAxios } from "@/lib";

export const useUserActions = (dispatch: Dispatch<ActionProps>, accessToken?: string) => {
  const onUpdate = async ({ username, data }: UpdateUserProps) => {
    dispatch({ type: USER_REQUEST });
    try {
      const response = await InstanceAxios.put(`/users/${username}`, data, { headers: { Authorization: `Bearer ${accessToken}` } })
      dispatch({ type: USER_UPDATE_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: USER_FAILURE, payload: { error: true } });
    }
  }
  const onGet = useCallback(async (username?: string) => {
    dispatch({ type: USER_REQUEST });
    try {
      const response = await InstanceAxios.get(`/users/${username ?? ''}`, { headers: { Authorization: `Bearer ${accessToken}` } })
      dispatch({ type: USER_GET_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: USER_FAILURE, payload: { error: true } });
    }
  }, [dispatch, accessToken]);

  const onCreate = async (data: CreateUserProps) => {
    dispatch({ type: USER_REQUEST });
    try {
      await InstanceAxios.post('/users', data, { headers: { Authorization: `Bearer ${accessToken}` } });
    } catch {
      dispatch({ type: USER_FAILURE, payload: { error: true } });
    }
  }

  const onDelete = async (username: string) => {
    dispatch({ type: USER_REQUEST });
    try {
      await InstanceAxios.delete(`/users/${username}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    } catch {
      dispatch({ type: USER_FAILURE, payload: { error: true } });
    }
  };

  return { onCreate, onGet, onUpdate, onDelete }
}