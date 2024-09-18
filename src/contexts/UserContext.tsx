import { createContext } from "react";

export interface UpdateUserProps {
  username: string,
  data: {
    name?: string
    password?: string
  }
}

export interface UserContextProps {
  loading: boolean
  error: string | boolean
  onUpdate: (props: UpdateUserProps) => void
}

const UserContextValues: UserContextProps = {
  loading: true,
  error: false,
  onUpdate: () => '',
}

export const UserContext = createContext(UserContextValues);
