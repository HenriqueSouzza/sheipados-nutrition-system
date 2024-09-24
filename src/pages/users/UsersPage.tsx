import { useUsersPage } from './useUsersPage';
import * as S from './UsersPage.styles';
import { Table, TableBody, TableHead } from '@/components';
import { SearchBar } from './components/SearchBar';

export const UsersPage = () => {
  const { dataTable, searchBar, loading } = useUsersPage();

  return (
    <S.Container>
      <SearchBar {...searchBar} />
      <S.TableContainer>
        <Table>
          <TableHead columns={dataTable.columns} />
          <TableBody {...dataTable} loading={loading} />
        </Table>
      </S.TableContainer>
    </S.Container>
  )
};
