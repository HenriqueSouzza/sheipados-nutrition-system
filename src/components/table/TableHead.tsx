import { TableRow, TableCell } from '@mui/material';
import * as S from './TableHead.styles';
import { TableHeadProps } from "./TableHead.types";

export const TableHead = ({ columns }: TableHeadProps) => (
  <S.TableHead>
    <TableRow>
      {Object.values(columns).map((column: string) => (
        <TableCell key={column} component={'th'}>
          {column}
        </TableCell>
      ))}
    </TableRow>
  </S.TableHead>
);