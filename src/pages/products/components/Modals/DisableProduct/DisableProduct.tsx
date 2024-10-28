import { Button } from '@/components';
import * as S from './DisableProduct.styles';
import { ProductsDataProps } from '@/interface';

export interface DisableProductProps {
  dataProduct: ProductsDataProps
  onSubmitDisableProduct: (data: ProductsDataProps) => void
}

export const DisableProduct = ({ onSubmitDisableProduct, dataProduct }: DisableProductProps) => (
  <S.Container>
    <S.Title>Deseja desativar esse produto?</S.Title>
    <Button onClick={() => onSubmitDisableProduct(dataProduct)}>Confirmar</Button>
  </S.Container>
)