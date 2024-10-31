import { Add, ArrowBack, ChangeCircle, Delete, ShoppingBasket } from '@/icons';
import { Card } from '../Card';
import * as S from './ProductIdentifier.styles';
import { Button, TextField } from '@/components';
import { BaseSyntheticEvent, ReactNode, SyntheticEvent } from 'react';

interface ProductFormFieldsProps {
  title: string,
  input: (initialValue: { productCode?: number, quantity?: number } | null) => ReactNode
}

const ProductFormFields: Array<ProductFormFieldsProps> = [
  {
    title: 'Código',
    input: (initialValue) => (
      <TextField
        fullWidth
        type='number'
        name="productCode"
        disabled={initialValue?.productCode !== undefined}
        defaultValue={initialValue?.productCode}
        placeholder='Digite o código'
        required
      />
    ),
  },
  {
    title: 'Total de itens',
    input: (initialValue) => (
      <TextField
        fullWidth
        required
        type='number'
        name="quantity"
        defaultValue={initialValue?.quantity}
        placeholder='Digite o código'
      />
    )
  },
];

interface AddProductAtListProps {
  onSubmit: (data: BaseSyntheticEvent) => void
}

const AddProductAtList = ({ onSubmit }: AddProductAtListProps) => (
  <S.Form onSubmit={onSubmit}>
    {ProductFormFields.map(({ title, input }: ProductFormFieldsProps) => (
      <Card key={Math.random()} title={title}>
        {input(null)}
      </Card>
    ))}
    <Button type='submit' variant='contained' color='secondary' startIcon={<Add />}>Adicionar Item</Button>
  </S.Form>
);

interface ChangeProductListProps {
  onSubmit: (data: BaseSyntheticEvent) => void
  onRemoveItem: (e: SyntheticEvent) => void
  onDisableModeEdition: () => void
  itemSelected: Record<string, string>
}

const ChangeProductList = ({ itemSelected, onSubmit, onRemoveItem, onDisableModeEdition }: ChangeProductListProps) => (
  <S.Form onSubmit={onSubmit}>
    {ProductFormFields.map(({ title, input }: ProductFormFieldsProps) => (
      <Card key={Math.random()} title={title}>
        {input(itemSelected)}
      </Card>
    ))}
    <Button type='submit' variant='contained' color='secondary' startIcon={<ChangeCircle />}>Atualizar</Button>
    <Button type='submit' variant='contained' color='info' startIcon={<Delete />} onClick={onRemoveItem}>Remover</Button>
    <Button type='button' variant='contained' color='inherit' startIcon={<ArrowBack />} onClick={onDisableModeEdition}>Voltar</Button>
  </S.Form>
);

interface ActionsProductListProps {
  onAddItem: AddProductAtListProps['onSubmit']
  onUpdateItem: ChangeProductListProps['onSubmit']
  onRemoveItem: ChangeProductListProps['onRemoveItem']
  onDisableModeEdition: ChangeProductListProps['onDisableModeEdition']
  itemSelected: Record<string, string>
}

const ActionsProductList = ({ itemSelected, onAddItem, onUpdateItem, onRemoveItem, onDisableModeEdition }: ActionsProductListProps) => {
  if (Object.values(itemSelected).length) {
    return (
      <ChangeProductList
        itemSelected={itemSelected}
        onRemoveItem={onRemoveItem}
        onDisableModeEdition={onDisableModeEdition}
        onSubmit={onUpdateItem}
      />
    )
  }

  return <AddProductAtList onSubmit={onAddItem} />
}

interface MakePurchaseProps {
  onClick: () => void
  totalAmount: string
}

const MakePurchase = ({ onClick, totalAmount }: MakePurchaseProps) => (
  <>
    <Card title='Total'>
      <S.Amount>R$ {totalAmount}</S.Amount>
    </Card>
    <Button type='button' onClick={onClick} variant='contained' color='success' startIcon={<ShoppingBasket />}>Fechar compra</Button>
  </>
)

interface ProductIdentifierProps extends ActionsProductListProps {
  onMakePurchase: MakePurchaseProps['onClick']
  onRemoveItem: ChangeProductListProps['onRemoveItem']
  onDisableModeEdition: ChangeProductListProps['onDisableModeEdition']
  itemSelected: ActionsProductListProps['itemSelected']
  totalAmount: MakePurchaseProps['totalAmount']
}

export const ProductIdentifier = ({ itemSelected, totalAmount, onAddItem, onUpdateItem, onRemoveItem, onMakePurchase, onDisableModeEdition }: ProductIdentifierProps) => (
  <S.ProductIdentifier>
    <ActionsProductList
      onAddItem={onAddItem}
      onUpdateItem={onUpdateItem}
      onDisableModeEdition={onDisableModeEdition}
      onRemoveItem={onRemoveItem}
      itemSelected={itemSelected}
    />
    <MakePurchase onClick={onMakePurchase} totalAmount={totalAmount} />
  </S.ProductIdentifier>
)