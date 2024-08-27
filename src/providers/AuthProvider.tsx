import { ReactNode, useCallback, useMemo, useState } from "react";
import { AuthContext, AuthContextProps } from "@/contexts";
import { useNavigate } from 'react-router-dom';

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ ...props }: AuthProviderProps) => {
  const [logged, setLogged] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = useCallback(() => {
    setLogged(true)
    navigate('/');
  }, [navigate])

  const logout = useCallback(() => {
    setLogged(false)
    navigate('/auth');
  }, [navigate])

  const AuthContextValue: AuthContextProps = useMemo(() => ({
    logged,
    login,
    logout,
  }), [logged, login, logout])

  return <AuthContext.Provider value={AuthContextValue} {...props} />
}