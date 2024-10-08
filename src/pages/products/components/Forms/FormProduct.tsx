import { Control, Controller } from 'react-hook-form'
import * as S from './FormProduct.styles'
import { Button, TextField } from '@/components'
import { BaseSyntheticEvent } from 'react'

export interface ProductFormDataProps {
  productCode: string
  productName: string
}

interface FormProductProps {
  control: Control<ProductFormDataProps>
  onSubmit: (data: BaseSyntheticEvent, e?: Event) => void
}

interface FieldsProps {
  control: Control<ProductFormDataProps>
  name: keyof ProductFormDataProps
  label: string
}


const Fields = ({ control, name, label }: FieldsProps) => (
  <Controller
    name={name}
    control={control}
    rules={{ required: true }}
    render={({ field, fieldState: { error } }) => (
      <TextField
        {...field}
        error={!!error}
        helperText={error?.message}
        label={label}
      />
    )} />
)

export const FormProduct = ({ control, onSubmit }: FormProductProps) => (
  <S.Form onSubmit={onSubmit}>
    <Fields control={control} name="productCode" label="Código do produto" />
    <Fields control={control} name="productName" label="Nome do produto" />
    <Button type="submit" variant='contained'>Enviar</Button>
  </S.Form>
)