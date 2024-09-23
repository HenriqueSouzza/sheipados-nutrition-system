import { Dispatch } from "react";
import { USER_FAILURE, USER_REQUEST, USER_UPDATE_SUCCESS } from "./UserTypes";
import { userHttp } from "@/services";
import { ActionProps } from "@/interface";

export const update = async (dispatch: Dispatch<ActionProps>, username: string, data: { name?: string, password?: string }, accessToken: string) => {
  dispatch({ type: USER_REQUEST });
  try {
    const response = await userHttp.update(username, data, accessToken)
    dispatch({ type: USER_UPDATE_SUCCESS, payload: response.data });
  } catch {
    dispatch({ type: USER_FAILURE, payload: { error: true } });
  }
};

export const UserActions = { update }