import { Button, TextField } from '@/components';
import * as S from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';
import { NewProduct } from '../Modals';
import { memo } from 'react';

export const SearchBar = memo(({ onChangeFilterBy, handleModal, onSubmitNewProduct }: SearchBarProps) => {
  const handleClickNewProduct = () => {
    handleModal(<NewProduct onSubmitNewProduct={onSubmitNewProduct} />)
  }

  return (
    <S.SearchBar>
      <TextField
        type='text'
        label="Filtrar por"
        aria-label="Campo de filtro"
        onChange={onChangeFilterBy}
      />
      <Button onClick={handleClickNewProduct} aria-label='Novo produto' variant="contained">Novo Produto</Button>
    </S.SearchBar>
  )
})