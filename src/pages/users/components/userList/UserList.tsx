import { Table, TableBody, TableHead } from '@/components';
import * as S from './UserList.styles';
import { UserDataProps } from '@/interface';
import { ReactNode } from 'react';
import { DeleteUser, EditUser } from '../Modals';

interface UserListProps {
  columns: Record<string, string>
  rows: Array<Record<string, string>>
  loading?: boolean
  onEdit: (item: UserDataProps) => void
  onDelete: (item: UserDataProps) => void
  onModal: (value: ReactNode) => void
}

export const UserList = ({ columns, onModal, onEdit, onDelete, ...props }: UserListProps) => (
  <S.TableContainer>
    <Table>
      <TableHead columns={columns} />
      <TableBody
        columns={columns}
        onEdit={(item) => onModal(<EditUser onSubmit={onEdit} initialDataUser={item} />)}
        onDelete={(item) => onModal(<DeleteUser onSubmit={onDelete} data={item} />)}
        {...props}
      />
    </Table>
  </S.TableContainer>
)