import { Dispatch } from "react";
import { LOGIN_FAILURE, LOGIN_PROFILE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./AuthTypes";
import { authHttp } from "@/services";
import Cookies from "js-cookie";

export interface AuthActionProps {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
}

export const login = async (dispatch: Dispatch<AuthActionProps>, { username, password }: { username: string; password: string }) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await authHttp.login(username, password)
    Cookies.set('accessToken', response.data.access_token, { expires: 1, path: '' });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.access_token });
  } catch {
    dispatch({ type: LOGIN_FAILURE, payload: 'error' });
  }
};

export const profile = async (dispatch: Dispatch<AuthActionProps>, accessToken: string) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await authHttp.profile(accessToken);
    dispatch({ type: LOGIN_PROFILE, payload: { ...response.data, accessToken } });
  } catch {
    dispatch({ type: 'LOGOUT' });
  }
};

export const logout = (dispatch: Dispatch<AuthActionProps>) => {
  dispatch({ type: 'LOGOUT' });
};

export const AuthActions = { login, logout, profile }