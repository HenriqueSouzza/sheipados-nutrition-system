import { ReactNode } from 'react';
import *  as S from './CashPage.styles';
import { Button, Table, TableBody, TableHead, TextField } from '@/components';

interface CardProps {
  title: string
  children?: ReactNode
}

export const Card = ({ title = 'title', children }: CardProps) => {
  return (
    <S.Card>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardBody>{children}</S.CardBody>
    </S.Card>
  )
}

export const ProductList = () => {
  const products = [
    {
      id: '1',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
    {
      id: '2',
      productCode: '123123',
      productName: 'Nome do Produto',
      quantity: '10',
      valueUnit: '10.00',
      amount: '20',
    },
  ];

  const productsCols = {
    id: '#',
    productCode: 'Código',
    productName: 'Nome do produto',
    quantity: 'Qtd',
    valueUnit: 'Valor Unit',
    amount: 'Total',
  }

  return (
    <S.ProductList>
      <Card title="Listagem de produtos">
        <S.ContainerCardBody>
          <Table>
            <TableHead columns={productsCols} />
            <TableBody rows={products} columns={productsCols} />
          </Table>
        </S.ContainerCardBody>
      </Card>
    </S.ProductList>
  )
}

export const ProductIdentifier = () => {
  const ProductIdentifierCards = [
    {
      title: 'Código',
      body: <TextField fullWidth placeholder='Digite o código' />
    },
    {
      title: 'Total',
      body: <S.Amount>R$ 20.00</S.Amount>
    },
    {
      title: 'Total de itens',
      body: <TextField type='number' fullWidth placeholder='Digite o código' />
    },
  ];

  return (
    <S.ProductIdentifier>
      {ProductIdentifierCards.map(({ title, body }: { title: string, body: JSX.Element }) => (
        <Card key={Math.random()} title={title}>
          {body}
        </Card>
      ))}
      <Button variant='contained'>Fechar compra</Button>
    </S.ProductIdentifier>
  )
}

export const FlowFreeCash = () => {
  return (
    <S.FlowFreeCash>
      <ProductIdentifier />
      <ProductList />
    </S.FlowFreeCash>
  )
}

export const CashPage = () => {
  return (
    <S.Container>
      <S.Title>Caixa Livre</S.Title>
      <FlowFreeCash />
    </S.Container>
  )
}