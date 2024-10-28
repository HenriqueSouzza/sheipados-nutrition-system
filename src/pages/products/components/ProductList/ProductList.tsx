import { Table, TableBody, TableHead } from '@/components';
import * as S from './ProductList.styles';
import { ProductsDataProps } from '@/interface';
import { ReactNode } from 'react';
import { DisableProduct, EditProduct } from '../Modals';

interface ProductListProps {
  columns: Record<string, string>
  rows: Array<Record<string, string>>
  loading?: boolean
  onEdit: (item: ProductsDataProps) => void
  onDisable: (item: ProductsDataProps) => void
  onModal: (value: ReactNode) => void
}

export const ProductList = ({ columns, onModal, onEdit, onDisable, ...props }: ProductListProps) => (
  <S.TableContainer>
    <Table>
      <TableHead columns={columns} />
      <TableBody
        columns={columns}
        onEdit={(item) => onModal(<EditProduct onSubmitEditProduct={onEdit} initialProductData={item} />)}
        onDisable={(item) => onModal(<DisableProduct onSubmitDisableProduct={onDisable} dataProduct={item} />)}
        {...props}
      />
    </Table>
  </S.TableContainer>
)