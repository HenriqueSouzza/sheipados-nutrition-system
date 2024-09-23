import { createContext } from "react";
import { ProfileDataProps } from "@/interface";

export interface AuthContextProps {
  profile: ProfileDataProps
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
