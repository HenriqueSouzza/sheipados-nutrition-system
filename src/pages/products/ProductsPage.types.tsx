import { ChangeEvent } from "react"
import { ProductsProps } from "@/interface"

export interface SearchBarProps {
  onChangeFilterBy: (e: ChangeEvent<HTMLInputElement>) => void
  onClickNewProduct: () => void
}

export interface ColumnsProps {
  [key: string]: string
}

export interface RowsProps extends Array<ProductsProps> { }

export interface ActionsProps {
  onEditProduct: (item: ProductsProps) => void
}

export interface TableCellProps {
  column: string
  actions: ActionsProps
  row: ProductsProps
}

export interface TableHeadProps {
  columns: ColumnsProps
}

export interface TableBodyProps {
  columns: ColumnsProps
  rows: RowsProps
  actions: ActionsProps
}

export interface ProductListProps extends TableBodyProps { }