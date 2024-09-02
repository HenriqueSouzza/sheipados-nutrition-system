import { Button, TextField } from '@/components';
import * as S from './ProductsPage.styles';
import { useProductsPage } from './useProductsPage';
import { ProductsProps } from '@/interface';
import { EditNote } from '@/icons';
import { ProductListProps, SearchBarProps, TableBodyProps, TableCellProps, TableHeadProps } from './ProductsPage.types';

export const SearchBar = ({ onChangeFilterBy, onClickNewProduct }: SearchBarProps) => (
  <S.SearchBar>
    <TextField
      type='text'
      label="Filtrar por"
      onChange={onChangeFilterBy}
    />
    <Button onClick={onClickNewProduct} aria-label='Novo produto' variant="contained">Novo Produto</Button>
  </S.SearchBar>
)

export const TableHead = ({ columns }: TableHeadProps) => (
  <S.TableHead>
    <S.TableRow>
      {Object.values(columns).map((column: string) => (
        <S.TableCell key={column} component={'th'}>{column}</S.TableCell>
      ))}
    </S.TableRow>
  </S.TableHead>
);

export const TableCell = ({ row, column, actions: { onEditProduct } }: TableCellProps) => {
  if (column === 'actions') {
    return (
      <S.TableCell key={column} onClick={() => onEditProduct(row)}>
        <EditNote />
      </S.TableCell>
    );
  }
  return <S.TableCell key={column} component={'td'}>{row[column as keyof ProductsProps]}</S.TableCell>;
};

export const TableBody = ({ rows, columns, actions }: TableBodyProps) => (
  <S.TableBody>
    {rows.map((row: ProductsProps) => (
      <S.TableRow key={row.id}>
        {Object.keys(columns).map((column: string) => TableCell({ row, column, actions }))}
      </S.TableRow>
    ))}
  </S.TableBody>
)

export const ProductList = ({ columns, rows, actions }: ProductListProps) => (
  <S.Table>
    <TableHead columns={columns} />
    <TableBody rows={rows} columns={columns} actions={actions} />
  </S.Table>
);

export const ProductsPage = () => {
  const { dataTable, searchBar } = useProductsPage();

  return (
    <S.Container>
      <SearchBar {...searchBar} />
      <ProductList {...dataTable} />
    </S.Container>
  );
};
