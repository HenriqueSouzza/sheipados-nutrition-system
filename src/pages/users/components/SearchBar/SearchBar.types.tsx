import { UserDataProps } from "@/interface"
import { ChangeEvent, ReactNode } from "react"

export interface SearchBarProps {
  onChangeFilterBy: (e: ChangeEvent<HTMLInputElement>) => void
  onNewUser: (value: UserDataProps) => void
  handleModal: (value: ReactNode) => void
}