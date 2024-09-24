import { useForm } from 'react-hook-form';
import * as S from './NewUser.styles';
import { UserDataProps } from '@/interface';
import { FormUser } from '../../Forms';

interface NewUserProps {
  onSubmit: (data: UserDataProps) => void
}

export const NewUser = ({ onSubmit }: NewUserProps) => {
  const { handleSubmit, control } = useForm<UserDataProps>({
    defaultValues: {
      email: '',
      firstLogin: false,
      isActive: false,
      name: '',
      username: ''
    }
  });

  return (
    <S.Container>
      <S.Title>Criar Usuário</S.Title>
      <FormUser control={control} onSubmit={handleSubmit(onSubmit)} />
    </S.Container>
  )
}