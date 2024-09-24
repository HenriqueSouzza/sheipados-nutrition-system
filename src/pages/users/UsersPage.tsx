import { useUsersPage } from './useUsersPage';
import * as S from './UsersPage.styles';
import { Table, TableBody, TableHead } from '@/components';

export const UsersPage = () => {
  const { dataTable, loading } = useUsersPage();

  return (
    <S.Container>
      <S.TableContainer>
        <Table>
          <TableHead columns={dataTable.columns} />
          <TableBody {...dataTable} loading={loading} />
        </Table>
      </S.TableContainer>
    </S.Container>
  )
};
