import { Button, TextField } from '@/components';
import * as S from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';
import { memo } from 'react';
import { NewUser } from '../Modals';

export const SearchBar = memo(({ onChangeFilterBy, handleModal, onNewUser }: SearchBarProps) => {
  const handleClickNewProduct = () => handleModal(<NewUser onSubmit={onNewUser} />)

  return (
    <S.SearchBar>
      <TextField
        type='text'
        label="Filtrar por"
        aria-label="Campo de filtro"
        onChange={onChangeFilterBy}
      />
      <Button onClick={handleClickNewProduct} aria-label='Novo usuario' variant="contained">Novo Usuário</Button>
    </S.SearchBar>
  )
})