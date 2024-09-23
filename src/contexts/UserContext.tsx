import { UserDataProps } from "@/interface";
import { createContext } from "react";

export interface UpdateUserProps {
  username: UserDataProps['username'],
  data: {
    name?: string
    password?: string
  }
}

export interface GetUserProps {
  username?: UserDataProps['username']
}

export interface UserContextProps {
  user: UserDataProps
  userList: Array<UserDataProps>
  loading: boolean
  error: string | boolean
  onUpdate: (props: UpdateUserProps) => void
  onGet: (props: GetUserProps) => void
}

const UserContextValues: UserContextProps = {
  user: {},
  userList: [],
  loading: true,
  error: false,
  onUpdate: () => '',
  onGet: () => '',
}

export const UserContext = createContext(UserContextValues);
