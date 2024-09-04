import * as S from './ProductsPage.styles';
import { useProductsPage } from './useProductsPage';
import { ProductList, SearchBar } from './components';

export const ProductsPage = () => {
  const { dataTable, searchBar } = useProductsPage();

  return (
    <S.Container>
      <SearchBar {...searchBar} />
      <ProductList {...dataTable} />
    </S.Container>
  );
};
