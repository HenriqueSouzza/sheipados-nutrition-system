import { Control, Controller } from 'react-hook-form'
import * as S from './FormUser.styles'
import { Button, TextField } from '@/components'
import { BaseSyntheticEvent } from 'react'
import { UserDataProps } from '@/interface'

interface FieldsProps {
  control: Control<UserDataProps>
  name: keyof UserDataProps
  label: string
}

interface FormUserProps {
  control: Control<UserDataProps>
  onSubmit: (data: BaseSyntheticEvent, e?: Event) => void
}

const Fields = ({ control, name, label }: FieldsProps) => (
  <Controller
    name={name}
    control={control}
    rules={{ required: true }}
    render={({ field, fieldState: { error } }) => (
      <TextField
        {...field}
        fullWidth
        error={!!error}
        helperText={error?.message}
        label={label}
      />
    )} />
)

export const FormUser = ({ control, onSubmit }: FormUserProps) => (
  <S.Form onSubmit={onSubmit}>
    <Fields control={control} name="name" label="Nome completo" />
    <Fields control={control} name="email" label="Email do usuário" />
    <Button type="submit" variant='contained'>Salvar</Button>
  </S.Form>
)