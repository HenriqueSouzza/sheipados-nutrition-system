import { ChangeEvent, memo, ReactNode } from 'react';
import { Button, TextField } from '@/components';
import * as S from './SearchBar.styles';
import { UserDataProps } from '@/interface';
import { NewUser } from '../Modals';

export interface SearchBarProps {
  onChangeFilterBy: (e: ChangeEvent<HTMLInputElement>) => void
  onNewUser: (value: UserDataProps) => void
  onModal: (value: ReactNode) => void
}

export const SearchBar = memo(({ onChangeFilterBy, onNewUser, onModal }: SearchBarProps) => (
  <S.SearchBar>
    <TextField
      type='text'
      label="Filtrar por"
      aria-label="Campo de filtro"
      onChange={onChangeFilterBy}
    />
    <Button onClick={() => onModal(<NewUser onSubmit={onNewUser} />)} aria-label='Novo usuario' variant="contained">Novo Usuário</Button>
  </S.SearchBar>
))