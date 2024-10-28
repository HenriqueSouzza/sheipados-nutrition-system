import { ChangeEvent } from "react"

export interface SearchBarProps {
  onChangeFilterBy: (e: ChangeEvent<HTMLInputElement>) => void
  onNewProduct: () => void
}