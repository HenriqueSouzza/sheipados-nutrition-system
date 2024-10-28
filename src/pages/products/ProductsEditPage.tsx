import { FormProduct } from './components/Forms';
import * as S from './ProductsPage.styles';
import { useProductsEditPage } from "./useProductsEditPage";

export const ProductsEditPage = () => {
  const { onSubmitEdit, control, loading } = useProductsEditPage();

  return (
    <S.Container>
      <S.Title>Editar produto</S.Title>
      <FormProduct control={control} loading={loading} onSubmit={onSubmitEdit} />
    </S.Container>
  )
}