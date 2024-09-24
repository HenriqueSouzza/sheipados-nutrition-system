import { TableRow } from '@mui/material';
import * as S from './TableHead.styles';
import { TableHeadProps } from "./TableHead.types";

export const TableHead = ({ columns }: TableHeadProps) => (
  <S.TableHead>
    <TableRow>
      {Object.values(columns).map((column: string) => (
        <S.TableCell key={column} component={'th'}>
          {column}
        </S.TableCell>
      ))}
    </TableRow>
  </S.TableHead>
);