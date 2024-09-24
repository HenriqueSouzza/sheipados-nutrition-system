import { Button } from '@/components';
import * as S from './DeleteUser.styles';
import { UserDataProps } from '@/interface';

export interface DeleteUserProps {
  data: UserDataProps
  onSubmit: (data: UserDataProps) => void
}

export const DeleteUser = ({ onSubmit, data }: DeleteUserProps) => (
  <S.Container>
    <S.Title>Deseja remover esse usuário?</S.Title>
    <Button onClick={() => onSubmit(data)}>Confirmar</Button>
  </S.Container>
)