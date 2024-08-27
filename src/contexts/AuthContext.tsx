import { createContext } from "react";

export interface AuthContextProps {
  logged: boolean
  login: () => void
  logout: () => void
}

const AuthContextValues: AuthContextProps = {
  logged: false,
  login: () => '',
  logout: () => ''
}

export const AuthContext = createContext(AuthContextValues);
