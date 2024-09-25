import { useUsersPage } from './useUsersPage';
import * as S from './UsersPage.styles';
import { SearchBar } from './components/SearchBar';
import { UserList } from './components';

export const UsersPage = () => {
  const { dataTable, searchBar, loading, handleModal } = useUsersPage();

  return (
    <S.Container>
      <SearchBar {...searchBar} onModal={handleModal} />
      <UserList onModal={handleModal} {...dataTable} loading={loading} />
    </S.Container>
  )
};
