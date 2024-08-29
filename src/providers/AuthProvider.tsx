import { ReactNode, useMemo, useState } from "react";
import { AuthContext, AuthContextProps } from "@/contexts";

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ ...props }: AuthProviderProps) => {
  const [logged, setLogged] = useState<boolean>(false);

  const login = () => {
    setLogged(true);
  }

  const logout = () => {
    setLogged(false);
  }

  const AuthContextValue: AuthContextProps = useMemo(() => ({
    logged,
    login,
    logout,
  }), [logged])

  return <AuthContext.Provider value={AuthContextValue} {...props} />
}