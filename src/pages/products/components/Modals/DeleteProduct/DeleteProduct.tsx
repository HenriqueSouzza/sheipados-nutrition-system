import { Button } from '@/components';
import * as S from './DeleteProduct.styles';
import { ProductsDataProps } from '@/interface';

export interface DeleteProductProps {
  dataProduct: ProductsDataProps
  onSubmitDeleteProduct: (data: ProductsDataProps) => void
}

export const DeleteProduct = ({ onSubmitDeleteProduct, dataProduct }: DeleteProductProps) => (
  <S.Container>
    <S.Title>Deseja desativar esse produto?</S.Title>
    <Button onClick={() => onSubmitDeleteProduct(dataProduct)}>Confirmar</Button>
  </S.Container>
)