import * as S from './ProfilePage.styles';
import { FieldFormProps, useProfilePage } from './useProfilePage';
import { Controller } from 'react-hook-form';
import { memo } from 'react';
import { Password, TextField } from '@/components';

const FieldForm = memo(({ control, rules, name = 'username', label, type, placeholder, disabled }: FieldFormProps) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState: { error } }) => (
      type === 'password' ? (
        <Password
          {...field}
          fullWidth
          type="password"
          label="password"
          placeholder="password"
          error={!!error}
          helperText={error?.message}
        />
      ) :
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
));

const FieldText = ({ value, label }: FieldFormProps) => {
  return (
    <S.FieldTextContainer>
      <S.Field>
        <b>{label}</b>
      </S.Field>
      <S.Field>{value}</S.Field>
    </S.FieldTextContainer>
  )
}

export const ProfilePage = () => {
  const { onSubmit, firstLogin, handleRedirectPageRoot, fieldsForm, loading } = useProfilePage();

  return (
    <S.Container>
      <S.Section>
        <S.TitlePage>Meu perfil</S.TitlePage>
        <S.Form onSubmit={onSubmit}>
          {fieldsForm.map((field: FieldFormProps) => field.readOnly ? (
            <FieldText key={+Math.random()} {...field} />
          ) : (
            <FieldForm
              key={+ Math.random()}
              {...field}
            />
          ))}
          <S.Actions>
            <S.Button disabled={loading} variant='contained' type='submit' size='small'>Salvar</S.Button>
            {!firstLogin ? (
              <S.Link underline='none' onClick={handleRedirectPageRoot}>Ir para página inicial</S.Link>
            ) : null}
          </S.Actions>
        </S.Form>
      </S.Section>
    </S.Container>
  )
}