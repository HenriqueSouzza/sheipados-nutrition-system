import { Dispatch, useCallback } from "react";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./AuthTypes";
import Cookies from "js-cookie";
import { ActionProps } from "@/interface";
import { useHttp } from "@/hooks";
import { LoginProps } from "@/contexts";

export const useAuthActions = (dispatch: Dispatch<ActionProps>) => {
  const axios = useHttp();

  const onLogin = async (data: LoginProps) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await axios.post('/auth/login', data);
      Cookies.set('accessToken', response.data.access_token, { expires: 1, path: '' });
      Cookies.set('authenticated', 'true', { expires: 1, path: '' });
      dispatch({ type: LOGIN_SUCCESS, payload: { accessToken: response.data.access_token, authenticated: true } });
    } catch {
      dispatch({ type: LOGIN_FAILURE, payload: 'error' });
    }
  }

  const onProfile = useCallback(async () => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await axios.get('/auth/profile');
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: 'LOGOUT' });
    }
  }, [dispatch, axios]);

  const onLogout = () => {
    Cookies.remove('accessToken')
    Cookies.remove('authenticated')
    dispatch({ type: 'LOGOUT' });
  }

  return { onLogin, onProfile, onLogout }
}