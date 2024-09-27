import { Control, Controller } from 'react-hook-form'
import * as S from './FormUser.styles'
import { Button, TextField } from '@/components'
import { BaseSyntheticEvent } from 'react'
import { UserDataProps } from '@/interface'
import { Checkbox, FormControlLabel } from '@mui/material'

interface FieldsProps {
  control: Control<UserDataProps>
  name: keyof UserDataProps
  label: string
  type?: 'text' | 'checkbox'
  required?: boolean
}

interface FormUserProps {
  control: Control<UserDataProps>
  onSubmit: (data: BaseSyntheticEvent, e?: Event) => void
  isCreateUser?: boolean
  isEditUser?: boolean
}

const Fields = ({ control, name, label, required, type = 'text' }: FieldsProps) => (
  <Controller
    name={name}
    control={control}
    rules={{ required }}
    render={({ field, fieldState: { error } }) => {
      if (type === 'text') {
        return <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          label={label}
        />
      }

      return <FormControlLabel control={<Checkbox checked={Boolean(field.value)} {...field} />} label={label} />
    }} />
)

export const FormUser = ({ control, isCreateUser, onSubmit }: FormUserProps) => (
  <S.Form onSubmit={onSubmit}>
    <Fields control={control} name="name" required label="Nome completo" />
    <Fields control={control} name="email" required label="Email do usuário" />
    {!isCreateUser ? (
      <Fields control={control} type='checkbox' name="isActive" label="Ativo" />
    ) : null}
    <Button type="submit" variant='contained'>Salvar</Button>
  </S.Form>
)