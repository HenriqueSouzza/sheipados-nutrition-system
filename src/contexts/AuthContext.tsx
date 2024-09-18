import { createContext } from "react";

export interface AuthContextProps {
  user: {
    accessToken?: string
    authenticated?: boolean
  }
  loading: boolean
  error: string | boolean
  onLogin: (username: string, password: string) => void
  onLogout: () => void
}

const AuthContextValues: AuthContextProps = {
  user: {},
  loading: true,
  error: false,
  onLogin: () => '',
  onLogout: () => '',
}

export const AuthContext = createContext(AuthContextValues);
