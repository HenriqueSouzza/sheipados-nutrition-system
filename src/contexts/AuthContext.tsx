import { createContext } from "react";

export interface AuthContextProps {
  profile: {
    accessToken?: string
    authenticated?: boolean
    firstLogin?: boolean
    email?: string
    username?: string
    name?: string
  }
  loading: boolean
  error: string | boolean
  onLogin: (username: string, password: string) => void
  onLogout: () => void
  onProfile: () => void
}

const AuthContextValues: AuthContextProps = {
  profile: {},
  loading: true,
  error: false,
  onLogin: () => '',
  onLogout: () => '',
  onProfile: () => '',
}

export const AuthContext = createContext(AuthContextValues);
