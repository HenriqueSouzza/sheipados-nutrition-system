import { useForm } from 'react-hook-form';
import { FormProduct, ProductFormDataProps } from '../../Forms';
import * as S from './NewProduct.styles';

interface NewProductProps {
  onSubmitNewProduct: (data: ProductFormDataProps) => void
}

export const NewProduct = ({ onSubmitNewProduct }: NewProductProps) => {
  const { handleSubmit, control } = useForm<ProductFormDataProps>({
    defaultValues: {
      productCode: '',
      productName: ''
    }
  });

  return (
    <S.Container>
      <S.Title>Adicionar novo produto</S.Title>
      <FormProduct control={control} onSubmit={handleSubmit(onSubmitNewProduct)} />
    </S.Container>
  )
}