import { Control, Controller } from 'react-hook-form'
import * as S from './FormProduct.styles'
import { Button, TextField } from '@/components'
import { BaseSyntheticEvent } from 'react'
import { ProductsDataProps } from '@/interface'
import { Checkbox, FormControlLabel } from '@mui/material'

export interface FormProductProps {
  control: Control<ProductsDataProps>
  loading?: boolean
  onSubmit: (data: BaseSyntheticEvent, e?: Event) => void
}

interface FieldsProps {
  control: Control<ProductsDataProps>
  name: keyof ProductsDataProps
  label: string
  disabled?: boolean
  type?: 'text' | 'checkbox'
  required?: boolean
}

const Fields = ({ control, name, label, disabled, required, type = 'text' }: FieldsProps) => (
  <Controller
    name={name}
    control={control}
    rules={{ required }}
    render={({ field, fieldState: { error } }) => {
      if (type === 'text') {
        return <TextField
          {...field}
          error={!!error}
          helperText={error?.message}
          label={label}
          disabled={disabled}
        />
      }

      return <FormControlLabel control={<Checkbox checked={Boolean(field.value)} {...field} />} label={label} />
    }} />
)

export const FormProduct = ({ control, onSubmit, loading }: FormProductProps) => (
  <S.Form onSubmit={onSubmit}>
    <hr />
    <S.Section>
      <Fields disabled={loading} control={control} name="code_ean" label="Código do produto" />
      <Fields disabled={loading} control={control} name="product_name" label="Nome do produto" />
      <Fields disabled={loading} control={control} name="category" label="Categoria" />
      <Fields disabled={loading} control={control} name="brand" label="Marca" />
    </S.Section>
    <hr />
    <S.Section>
      <Fields disabled={loading} control={control} name="expired_date" label="Data de expiração" />
      <Fields disabled={loading} control={control} name="code_ncm" label="Código NCM" />
      <Fields disabled={loading} control={control} name="code_cest" label="Código CEST" />
      <Fields disabled={loading} control={control} name="code_cfop" label="Código CFOP" />
    </S.Section>
    <hr />
    <S.Section>
      <Fields disabled={loading} control={control} name="value_last_pushase" label="Valor da última compra" />
      <Fields disabled={loading} control={control} name="cost_price" label="Preço de custo" />
      <Fields disabled={loading} control={control} name="profit_margin" label="Margem de lucro" />
      <Fields disabled={loading} control={control} name="current_stock" label="Estoque atual" />
    </S.Section>
    <hr />
    <S.Section>
      <Fields disabled={loading} type='checkbox' label='ativo?' control={control} name="is_active" />
    </S.Section>
    <hr />
    <S.Section>
      <Button disabled={loading} sx={{ width: 250 }} type="submit" variant='contained'>Salvar</Button>
    </S.Section>
  </S.Form>
)