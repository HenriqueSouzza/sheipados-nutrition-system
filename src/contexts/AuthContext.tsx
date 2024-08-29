import { createContext } from "react";

export interface AuthContextProps {
  logged: boolean
  onLogin: () => void
  onLogout: () => void
}

const AuthContextValues: AuthContextProps = {
  logged: false,
  onLogin: () => '',
  onLogout: () => ''
}

export const AuthContext = createContext(AuthContextValues);
