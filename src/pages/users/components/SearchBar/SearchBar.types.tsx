import { ChangeEvent, ReactNode } from "react"

export interface SearchBarProps {
  onChangeFilterBy: (e: ChangeEvent<HTMLInputElement>) => void
  handleModal: (value: ReactNode) => void
}