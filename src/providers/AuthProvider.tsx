import { ReactNode, useMemo, useState } from "react";
import { AuthContext, AuthContextProps } from "@/contexts";

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ ...props }: AuthProviderProps) => {
  const [logged, setLogged] = useState<boolean>(false);

  const onLogin = () => {
    setLogged(true);
  }

  const onLogout = () => {
    setLogged(false);
  }

  const AuthContextValue: AuthContextProps = useMemo(() => ({
    logged,
    onLogin,
    onLogout,
  }), [logged])

  return <AuthContext.Provider value={AuthContextValue} {...props} />
}