import { TableRow } from '@mui/material';
import * as S from './TableBody.styles';
import { TableBodyProps } from './TableBody.types';
import { RowProps } from './TableCell.types';
import { TableCell } from './TableCell';

export const TableBody = ({ rows, columns, onEdit, onDelete }: TableBodyProps) => (
  <S.TableBody>
    {rows.map((row: RowProps) => (
      <TableRow key={Number(Math.random())}>
        {Object.keys(columns).map((column: string) => TableCell({
          row,
          column,
          onEdit,
          onDelete,
        }))}
      </TableRow>
    ))}
  </S.TableBody>
)