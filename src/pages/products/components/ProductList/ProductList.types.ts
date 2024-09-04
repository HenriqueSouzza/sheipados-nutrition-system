import { ReactNode } from 'react'
import { ProductsProps } from "@/interface";
import { DeleteProductProps, EditProductProps } from '../Modals';
export type { ProductsProps } from '@/interface';

interface ModalProductProps {
  handleModal: (value: ReactNode) => void
  onSubmitEditProduct: EditProductProps['onSubmitEditProduct']
  onSubmitDeleteProduct: DeleteProductProps['onSubmitDeleteProduct']
}

export interface ColumnsProps {
  [key: string]: string
}

export interface RowsProps extends Array<ProductsProps> { }

export interface TableCellActionsProps extends EditProductProps, DeleteProductProps, ModalProductProps { }

export interface TableCellProps extends ModalProductProps {
  column: string
  row: ProductsProps
}

export interface TableBodyProps extends ModalProductProps {
  columns: ColumnsProps
  rows: RowsProps
}

export interface TableHeadProps {
  columns: ColumnsProps
}

export interface ProductListProps extends TableBodyProps { }