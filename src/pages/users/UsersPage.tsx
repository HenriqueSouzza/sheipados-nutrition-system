import { useUsersPage } from './useUsersPage';
import * as S from './UsersPage.styles';
import { Table, TableBody, TableHead } from '@/components';
import { CircularProgress } from '@mui/material';

export const UsersPage = () => {
  const { dataTable, loading } = useUsersPage();

  return (
    <S.Container>
      <S.TableContainer>
        <Table>
          <TableHead columns={dataTable.columns} />
          {loading ? (<CircularProgress size={20} />) : (<TableBody {...dataTable} />)}
        </Table>
      </S.TableContainer>
    </S.Container>
  )
};
