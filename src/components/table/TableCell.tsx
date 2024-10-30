import { TableCellActionsProps, TableCellProps } from "./TableCell.types";
import * as S from './TableCell.styles';
import { Delete, EditNote, VisibilityOff } from "@/icons";

const TableCellActions = ({ row, onEdit, onDelete, onDisable }: TableCellActionsProps) => (
  <S.TableCellActions>
    {onEdit && (
      <S.IconActions onClick={() => onEdit(row)}>
        <EditNote />
      </S.IconActions>
    )}
    {onDelete && (
      <S.IconActions onClick={() => onDelete(row)!}>
        <Delete />
      </S.IconActions>
    )}
    {onDisable && (
      <S.IconActions onClick={() => onDisable(row)!}>
        <VisibilityOff />
      </S.IconActions>
    )}
  </S.TableCellActions>
)

export const TableCell = ({ row, column, ...props }: TableCellProps) => (
  <S.TableCell key={Number(Math.random())} component={'td'}>
    {column === 'actions' ? (
      <TableCellActions row={row} {...props} />
    ) : (
      String(row[column])
    )}
  </S.TableCell>
)