import * as S from './ProductList.styles';
import { EditNote } from '@/icons';
import {
  ProductListProps,
  ProductsProps,
  TableBodyProps,
  TableCellActionsProps,
  TableCellProps,
  TableHeadProps
} from './ProductList.types';
import { DeleteProduct, EditProduct } from '../Modals';
import { Delete } from '@mui/icons-material';


const TableCellActions = ({ handleModal, data, onSubmitEditProduct, onSubmitDeleteProduct }: TableCellActionsProps) => (
  <S.TableCellActions>
    <S.IconActions onClick={() => handleModal(<EditProduct data={data} onSubmitEditProduct={onSubmitEditProduct} />)}>
      <EditNote />
    </S.IconActions>
    <S.IconActions onClick={() => handleModal(<DeleteProduct data={data} onSubmitDeleteProduct={onSubmitDeleteProduct} />)}>
      <Delete />
    </S.IconActions>
  </S.TableCellActions>
);

const TableCell = ({ row, column, ...props }: TableCellProps) => (
  <S.TableCell key={Number(Math.random())} component={'td'}>
    {column === 'actions' ? (
      <TableCellActions key={Number(Math.random())} data={row} {...props} />
    ) : (
      row[column as keyof ProductsProps]
    )}
  </S.TableCell>
)

const TableBody = ({ rows, columns, onSubmitEditProduct, handleModal, onSubmitDeleteProduct }: TableBodyProps) => (
  <S.TableBody>
    {rows.map((row: ProductsProps) => (
      <S.TableRow key={Number(Math.random())}>
        {Object.keys(columns).map((column: string) => TableCell({
          row,
          column,
          onSubmitEditProduct,
          onSubmitDeleteProduct,
          handleModal
        }))}
      </S.TableRow>
    ))}
  </S.TableBody>
)

const TableHead = ({ columns }: TableHeadProps) => (
  <S.TableHead>
    <S.TableRow>
      {Object.values(columns).map((column: string) => (
        <S.TableCell key={column} component={'th'}>
          {column}
        </S.TableCell>
      ))}
    </S.TableRow>
  </S.TableHead>
);

export const ProductList = ({ columns, rows, handleModal, onSubmitEditProduct, onSubmitDeleteProduct }: ProductListProps) => (
  <S.Table>
    <TableHead columns={columns} />
    <TableBody
      onSubmitDeleteProduct={onSubmitDeleteProduct}
      onSubmitEditProduct={onSubmitEditProduct}
      handleModal={handleModal}
      rows={rows}
      columns={columns}
    />
  </S.Table>
);