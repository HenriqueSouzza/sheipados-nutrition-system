import { TableCellActionsProps, TableCellProps } from "./TableCell.types";
import * as S from './TableCell.styles';
import { Delete, EditNote } from "@/icons";

const TableCellActions = ({ row, onEdit, onDelete }: TableCellActionsProps) => (
  <S.TableCellActions>
    <S.IconActions onClick={() => onEdit(row)}>
      <EditNote />
    </S.IconActions>
    <S.IconActions onClick={() => onDelete(row)}>
      <Delete />
    </S.IconActions>
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