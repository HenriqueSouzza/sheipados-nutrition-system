import * as S from './ProductsPage.styles';
import { useProductsPage } from './useProductsPage';
import { ProductList, SearchBar } from './components';

export const ProductsPage = () => {
  const { searchBar, dataTable, handleModal, loading } = useProductsPage();

  return (
    <S.Container>
      <SearchBar {...searchBar} />
      <ProductList onModal={handleModal} {...dataTable} loading={loading} />
    </S.Container>
  );
};
