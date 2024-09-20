import { Dispatch } from "react";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./AuthTypes";
import { authHttp } from "@/services";
import Cookies from "js-cookie";
import { ActionProps } from "@/interface";

export const login = async (dispatch: Dispatch<ActionProps>, { username, password }: { username: string; password: string }) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await authHttp.login(username, password)
    Cookies.set('accessToken', response.data.access_token, { expires: 1, path: '' });
    Cookies.set('authenticated', 'true', { expires: 1, path: '' });
    dispatch({ type: LOGIN_SUCCESS, payload: { accessToken: response.data.access_token, authenticated: true } });
  } catch {
    dispatch({ type: LOGIN_FAILURE, payload: 'error' });
  }
};

export const profile = async (dispatch: Dispatch<ActionProps>, accessToken: string) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await authHttp.profile(accessToken);
    dispatch({ type: LOGIN_SUCCESS, payload: { ...response.data, accessToken } });
  } catch {
    dispatch({ type: 'LOGOUT' });
  }
};

export const logout = (dispatch: Dispatch<ActionProps>) => {
  dispatch({ type: 'LOGOUT' });
};

export const AuthActions = { login, logout, profile }