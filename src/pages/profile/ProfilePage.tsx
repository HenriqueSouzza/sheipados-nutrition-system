import { TextField } from '@/components';
import * as S from './ProfilePage.styles';
import { FieldFormProps, useProfilePage } from './useProfilePage';
import { Controller } from 'react-hook-form';
import { memo } from 'react';

const FieldForm = memo(({ control, rules, name = 'username', label, type, placeholder, disabled }: FieldFormProps) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState: { error } }) => (
      <TextField
        {...field}
        fullWidth
        label={label}
        type={type}
        placeholder={placeholder}
        error={!!error}
        helperText={error?.message}
        disabled={disabled}
      />
    )}
  />
))

export const ProfilePage = () => {
  const { onSubmit, fieldsForm } = useProfilePage();
  return (
    <S.Container>
      <S.TitlePage>Meu perfil</S.TitlePage>
      <S.Form onSubmit={onSubmit}>
        {fieldsForm.map((field) => (
          <FieldForm
            key={+Math.random()}
            {...field}
          />
        ))}
        <S.Button
          variant="contained"
          type="submit"
          size="large"
        >
          Salvar
        </S.Button>
      </S.Form>
    </S.Container>
  )
}