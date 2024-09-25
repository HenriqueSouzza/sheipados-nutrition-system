import { useForm } from 'react-hook-form';
import { FormUser } from '../../Forms';
import * as S from './EditUser.styles';
import { UserDataProps } from '@/interface';

interface EditUserProps {
  initialDataUser: UserDataProps
  onSubmit: (data: UserDataProps) => void
}

export const EditUser = ({ onSubmit, initialDataUser }: EditUserProps) => {
  const { handleSubmit, control } = useForm<typeof initialDataUser>({
    defaultValues: initialDataUser
  });

  return (
    <S.Container>
      <S.Title>Editar Usuário</S.Title>
      <FormUser control={control} onSubmit={handleSubmit(onSubmit)} />
    </S.Container>
  )
}