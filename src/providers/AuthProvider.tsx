import { ReactNode, useEffect, useMemo, useState } from "react";
import { AuthContext, AuthContextProps } from "@/contexts";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ ...props }: AuthProviderProps) => {
  const [logged, setLogged] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate('/');
    }
  }, [logged, navigate])

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