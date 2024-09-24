import { UserDataProps } from "@/interface";
import { createContext } from "react";

export interface UpdateUserProps {
  username: UserDataProps['username'],
  data: {
    name?: string
    password?: string
  }
}

export interface CreateUserProps {
  email: UserDataProps['email']
  name: UserDataProps['name']
}

export interface UserContextProps {
  user: UserDataProps
  userList: Array<UserDataProps>
  loading: boolean
  error: string | boolean
  onCreate: (props: CreateUserProps) => void
  onUpdate: (props: UpdateUserProps) => void
  onGet: (username?: string) => void
}

const UserContextValues: UserContextProps = {
  user: {},
  userList: [],
  loading: true,
  error: false,
  onCreate: () => '',
  onUpdate: () => '',
  onGet: () => '',
}

export const UserContext = createContext(UserContextValues);
