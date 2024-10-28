import { Table, TableBody, TableHead } from '@/components';
import * as S from './ProductList.styles';
import { ProductsDataProps } from '@/interface';
import { ReactNode } from 'react';
import { DeleteProduct, DisableProduct } from '../Modals';

interface ProductListProps {
  columns: Record<string, string>
  rows: Array<Record<string, string>>
  loading?: boolean
  onEdit: (item: ProductsDataProps) => void
  onDisable: (item: ProductsDataProps) => void
  onDelete: (item: ProductsDataProps) => void
  onModal: (value: ReactNode) => void
}

export const ProductList = ({ columns, onModal, onEdit, onDisable, onDelete, ...props }: ProductListProps) => (
  <S.TableContainer>
    <Table>
      <TableHead columns={columns} />
      <TableBody
        columns={columns}
        onEdit={(item) => onEdit(item)}
        onDisable={(item) => onModal(<DisableProduct onSubmitDisableProduct={onDisable} dataProduct={item} />)}
        onDelete={(item) => onModal(<DeleteProduct onSubmitDeleteProduct={onDelete} dataProduct={item} />)}
        {...props}
      />
    </Table>
  </S.TableContainer>
)