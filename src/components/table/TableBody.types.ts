import { RowProps } from "./TableCell.types"

export interface ColumnsProps {
  [key: string]: string
}

export interface TableBodyProps {
  columns: ColumnsProps
  rows: Array<RowProps>
  onEdit: (item: RowProps) => void
  onDelete: (item: RowProps) => void
}