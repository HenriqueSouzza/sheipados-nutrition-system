import { ReactNode, useCallback, useEffect, useMemo, useReducer } from "react";
import { AuthContext, AuthContextProps } from "@/contexts";
import { AuthActions, AuthReducer, InitialStateAuth } from "@/reducer";
import Cookies from "js-cookie";

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ ...props }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, InitialStateAuth);

  const onLogin = async (username: string, password: string) => {
    AuthActions.login(dispatch, { username, password })
  }

  const onLogout = () => {
    Cookies.remove('accessToken')
    AuthActions.logout(dispatch)
  }

  const onProfile = useCallback(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) {
      AuthActions.profile(dispatch, accessToken)
    }
  }, [dispatch]);

  useEffect(() => {
    onProfile()
  }, [onProfile]);

  const AuthContextValue: AuthContextProps = useMemo(() => ({
    ...state,
    onLogin,
    onLogout,
    onProfile,
  }), [state, onProfile]);

  return <AuthContext.Provider value={AuthContextValue} {...props} />
}