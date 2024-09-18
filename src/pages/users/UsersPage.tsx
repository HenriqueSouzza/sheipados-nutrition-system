import { useUsersPage } from './useUsersPage';
import { ProductList, SearchBar } from '../products/components';
import * as S from './UsersPage.styles';

export const UsersPage = () => {
  const { dataTable, searchBar } = useUsersPage();

  return (
    <S.Container>
      <SearchBar {...searchBar} />
      <ProductList {...dataTable} />
    </S.Container>
  )
};
