export interface RowProps {
  [key: string]: string
}

export interface TableCellActionsProps {
  row: RowProps
  onEdit: (item: RowProps) => void
  onDelete?: (item: RowProps) => void
  onDisable?: (item: RowProps) => void
}

export interface TableCellProps extends TableCellActionsProps {
  column: string
}
