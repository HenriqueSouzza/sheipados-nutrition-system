import { Button, TextField } from '@/components';
import * as S from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';
import { memo } from 'react';

export const SearchBar = memo(({ onChangeFilterBy, onNewProduct }: SearchBarProps) => {
  return (
    <S.SearchBar>
      <TextField
        type='text'
        label="Filtrar por"
        aria-label="Campo de filtro"
        onChange={onChangeFilterBy}
      />
      <Button onClick={() => onNewProduct()} aria-label='Novo produto' variant="contained">Novo Produto</Button>
    </S.SearchBar>
  )
})