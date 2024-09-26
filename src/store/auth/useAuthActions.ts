import { Dispatch, useCallback } from "react";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./AuthTypes";
import Cookies from "js-cookie";
import { ActionProps } from "@/interface";
import { LoginProps } from "@/contexts";
import { InstanceAxios } from "@/lib";

export const useAuthActions = (dispatch: Dispatch<ActionProps>) => {
  const onLogout = () => {
    Cookies.remove('accessToken')
    Cookies.remove('authenticated')
    dispatch({ type: LOGOUT });
  };

  const onProfile = useCallback(async (accessToken?: string) => {
    dispatch({ type: LOGIN_REQUEST });
    if (!accessToken) {
      accessToken = Cookies.get('accessToken');
    }

    try {
      const response = await InstanceAxios.get('/auth/profile', { headers: { Authorization: `Bearer ${accessToken}` } });
      dispatch({ type: LOGIN_SUCCESS, payload: { ...response.data } });
    } catch {
      dispatch({ type: LOGIN_FAILURE, payload: 'error' });
    }
  }, [dispatch]);

  const onLogin = async (body: LoginProps) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await InstanceAxios.post('/auth/login', body);
      Cookies.set('accessToken', data.access_token, { expires: 1, path: '', secure: true, sameSite: 'Strict' });
      Cookies.set('authenticated', 'true', { expires: 1, path: '', secure: true, sameSite: 'Strict' });
      dispatch({ type: LOGIN_SUCCESS, payload: { accessToken: data.access_token, authenticated: true } });
      onProfile(data.access_token);
    } catch {
      dispatch({ type: LOGIN_FAILURE, payload: 'error' });
    }
  };

  return { onLogin, onProfile, onLogout }
}