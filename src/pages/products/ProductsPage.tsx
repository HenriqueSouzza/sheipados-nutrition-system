import * as S from './ProductsPage.styles';
import { useProductsPage } from './useProductsPage';
import { SearchBar } from './components';

export const ProductsPage = () => {
  const { searchBar } = useProductsPage();

  return (
    <S.Container>
      <SearchBar {...searchBar} />
      {/* <ProductList {...dataTable} /> */}
    </S.Container>
  );
};
