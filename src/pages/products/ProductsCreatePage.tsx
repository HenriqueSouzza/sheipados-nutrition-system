import { FormProduct } from './components/Forms';
import * as S from './ProductsPage.styles';
import { useProductsEditPage } from "./useProductsEditPage";

export const ProductsCreatePage = () => {
  const { onSubmitCreate, control, loading } = useProductsEditPage();

  return (
    <S.Container>
      <S.Title>Novo produto</S.Title>
      <FormProduct control={control} loading={loading} onSubmit={onSubmitCreate} />
    </S.Container>
  )
}