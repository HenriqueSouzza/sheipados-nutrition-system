import { UserDataProps } from "./user"

export interface ProfileDataProps extends UserDataProps {
  accessToken?: string
  authenticated?: boolean
}