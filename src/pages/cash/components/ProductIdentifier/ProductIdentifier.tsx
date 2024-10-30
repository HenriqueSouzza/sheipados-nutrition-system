import { Add, ShoppingBasket } from '@/icons';
import { Card } from '../Card';
import * as S from './ProductIdentifier.styles';
import { Button, TextField } from '@/components';
import { BaseSyntheticEvent } from 'react';

const FieldsSearchProduct = [
  {
    title: 'Código',
    body: <TextField fullWidth placeholder='Digite o código' />,
  },
  {
    title: 'Total de itens',
    body: <TextField type='number' fullWidth placeholder='Digite o código' />
  },
];

interface SearchProductCardProps {
  onSubmit: (data: BaseSyntheticEvent, e?: Event) => void
}

const SearchProductCard = ({ onSubmit }: SearchProductCardProps) => (
  <S.Form onSubmit={onSubmit}>
    {FieldsSearchProduct.map(({ title, body }: { title: string, body: JSX.Element }) => (
      <Card key={Math.random()} title={title}>
        {body}
      </Card>
    ))}
    <Button type='submit' variant='contained' color='secondary' startIcon={<Add />}>Adicionar Item</Button>
  </S.Form>
)

interface MakePurchaseProps {
  onClick: () => void
}

const MakePurchase = ({ onClick }: MakePurchaseProps) => (
  <>
    <Card title='Total'>
      <S.Amount>R$ 20.00</S.Amount>
    </Card>
    <Button type='button' onClick={onClick} variant='contained' color='success' startIcon={<ShoppingBasket />}>Fechar compra</Button>
  </>
)

interface ProductIdentifierProps {
  onAddItem: SearchProductCardProps['onSubmit']
  onClickMakePurchase: MakePurchaseProps['onClick']
}

export const ProductIdentifier = ({ onAddItem, onClickMakePurchase }: ProductIdentifierProps) => (
  <S.ProductIdentifier>
    <SearchProductCard onSubmit={onAddItem} />
    <MakePurchase onClick={onClickMakePurchase} />
  </S.ProductIdentifier>
)