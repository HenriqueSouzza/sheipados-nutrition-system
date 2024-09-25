import { UserDataProps } from "@/interface";
import { createContext } from "react";

export interface UpdateUserProps {
  username: UserDataProps['username'],
  data: UserDataProps
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
  onDelete: (username: string) => void
  onGet: (username?: string) => void
}

const UserContextValues: UserContextProps = {
  user: {},
  userList: [],
  loading: true,
  error: false,
  onCreate: () => '',
  onUpdate: () => '',
  onDelete: () => '',
  onGet: () => '',
}

export const UserContext = createContext(UserContextValues);
