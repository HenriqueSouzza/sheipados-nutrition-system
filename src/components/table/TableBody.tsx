import { CircularProgress } from '@mui/material';
import * as S from './TableBody.styles';
import { LoadingRowProps, TableBodyProps, TableRowProps } from './TableBody.types';
import { RowProps } from './TableCell.types';
import { TableCell } from './TableCell';


const LoadingRow = ({ colSpan }: LoadingRowProps) => (
  <S.TableRow>
    <S.TableCell colSpan={colSpan}>
      <CircularProgress size={20} />
    </S.TableCell>
  </S.TableRow>
);

const EmptyRow = ({ colSpan }: LoadingRowProps) => (
  <S.TableRow>
    <S.TableCell colSpan={colSpan}>
      <p>Nenhum registro encontrado</p>
    </S.TableCell>
  </S.TableRow>
);

const TableRow = ({ rows, columns, onEdit, onDelete, onDisable }: TableRowProps) => (
  !rows.length ? (
    <EmptyRow colSpan={Object.keys(columns).length} />
  ) : (
    rows.map((row: RowProps) => (
      <S.TableRow key={Number(Math.random())}>
        {Object.keys(columns).map((column: string) => (
          <TableCell
            key={Number(Math.random())}
            row={row}
            column={column}
            onEdit={onEdit}
            onDelete={onDelete}
            onDisable={onDisable}
          />
        ))}
      </S.TableRow>
    ))
  )
)

export const TableBody = ({ rows, columns, onEdit, onDelete, onDisable, loading }: TableBodyProps) => (
  <S.TableBody>
    {loading ? (
      <LoadingRow colSpan={Object.keys(columns).length} />
    ) : (
      <TableRow
        rows={rows}
        columns={columns}
        onEdit={onEdit}
        onDelete={onDelete}
        onDisable={onDisable}
      />
    )}
  </S.TableBody>
)