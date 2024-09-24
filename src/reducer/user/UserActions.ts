import { Dispatch } from "react";
import { USER_FAILURE, USER_GET_SUCCESS, USER_REQUEST, USER_UPDATE_SUCCESS } from "./UserTypes";
import { userHttp } from "@/services";
import { ActionProps } from "@/interface";

export const update = async (dispatch: Dispatch<ActionProps>, username: string, data: { name?: string, password?: string }) => {
  dispatch({ type: USER_REQUEST });
  try {
    const response = await userHttp.update(username, data)
    dispatch({ type: USER_UPDATE_SUCCESS, payload: response.data });
  } catch {
    dispatch({ type: USER_FAILURE, payload: { error: true } });
  }
};

export const get = async (dispatch: Dispatch<ActionProps>, username: string = '') => {
  dispatch({ type: USER_REQUEST });
  try {
    const response = await userHttp.get(username)
    dispatch({ type: USER_GET_SUCCESS, payload: response.data });
  } catch {
    dispatch({ type: USER_FAILURE, payload: { error: true } });
  }
};

export const create = async (dispatch: Dispatch<ActionProps>, data: { name: string, email: string }) => {
  dispatch({ type: USER_REQUEST });
  try {
    await userHttp.create(data)
    await get(dispatch);
  } catch {
    dispatch({ type: USER_FAILURE, payload: { error: true } });
  }
};

export const UserActions = { update, get, create }