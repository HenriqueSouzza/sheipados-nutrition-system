import { ProductFormDataProps } from '../../Forms';
import { Button } from '@/components';
import * as S from './DeleteProduct.styles';

export interface DeleteProductProps {
  data: ProductFormDataProps
  onSubmitDeleteProduct: (data: ProductFormDataProps) => void
}

export const DeleteProduct = ({ onSubmitDeleteProduct, data }: DeleteProductProps) => (
  <S.Container>
    <S.Title>Deseja delete esse produto?</S.Title>
    <Button onClick={() => onSubmitDeleteProduct(data)}>Confirmar</Button>
  </S.Container>
)