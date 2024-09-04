import { useForm } from 'react-hook-form';
import { FormProduct, ProductFormDataProps } from '../../Forms';
import * as S from './EditProduct.styles';

export interface EditProductProps {
  data: ProductFormDataProps
  onSubmitEditProduct: (data: ProductFormDataProps) => void
}

export const EditProduct = ({ onSubmitEditProduct, data }: EditProductProps) => {
  const { handleSubmit, control } = useForm<ProductFormDataProps>({
    defaultValues: data
  });

  return (
    <S.Container>
      <S.Title>Editar produto</S.Title>
      <FormProduct control={control} onSubmit={handleSubmit(onSubmitEditProduct)} />
    </S.Container>
  )
}