import { ChangeEvent, ReactNode } from "react"
import { ProductFormDataProps } from "../Forms"

export interface SearchBarProps {
  onChangeFilterBy: (e: ChangeEvent<HTMLInputElement>) => void
  handleModal: (value: ReactNode) => void
  onSubmitNewProduct: (value: ProductFormDataProps) => void
}