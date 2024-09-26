import { ReactNode, useMemo, useReducer } from "react";
import { AuthContext, AuthContextProps } from "@/contexts";
import { AuthReducer, InitialStateAuth, useAuthActions } from "@/store";

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ ...props }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, InitialStateAuth);
  const { onLogin, onLogout, onProfile } = useAuthActions(dispatch);

  const AuthContextValue: AuthContextProps = useMemo(() => ({
    ...state,
    onLogin,
    onLogout,
    onProfile,
  }), [state, onProfile, onLogin, onLogout]);

  return <AuthContext.Provider value={AuthContextValue} {...props} />
}