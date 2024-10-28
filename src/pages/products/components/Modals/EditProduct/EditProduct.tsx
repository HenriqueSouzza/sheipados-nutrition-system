import { useForm } from 'react-hook-form';
import { FormProduct } from '../../Forms';
import * as S from './EditProduct.styles';
import { ProductsDataProps } from '@/interface';

export interface EditProductProps {
  initialProductData: ProductsDataProps
  onSubmitEditProduct: (data: ProductsDataProps) => void
}

export const EditProduct = ({ onSubmitEditProduct, initialProductData }: EditProductProps) => {
  const { handleSubmit, control } = useForm<ProductsDataProps>({
    defaultValues: initialProductData
  });

  return (
    <S.Container>
      <S.Title>Editar produto</S.Title>
      <FormProduct control={control} onSubmit={handleSubmit(onSubmitEditProduct)} />
    </S.Container>
  )
}