import { RowProps } from "./TableCell.types"

export interface LoadingRowProps {
  colSpan: number
}

export interface ColumnsProps {
  [key: string]: string
}

export interface TableRowProps {
  rows: Array<RowProps>
  columns: ColumnsProps
  onEdit?: (item: RowProps) => void
  onDelete?: (item: RowProps) => void
  onDisable?: (item: RowProps) => void
  onRow?: (item: RowProps) => void
}

export interface TableBodyProps extends TableRowProps {
  loading?: boolean
}