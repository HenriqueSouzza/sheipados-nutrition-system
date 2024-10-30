import { BaseSyntheticEvent } from "react";

interface ProductListItemProps {
  id?: string
  productCode?: string
  productName?: string
  quantity?: string
  valueUnit?: string
  amount?: string
}

export const useCashPage = () => {

  const productListSelected = [
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
  ];

  const productsCols = {
    id: '#',
    productCode: 'Código',
    productName: 'Nome do produto',
    quantity: 'Qtd',
    valueUnit: 'Valor Unit',
    amount: 'Total',
  }

  const handleAddItem = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    console.log('add item');
  }

  const handleClickMakePurchase = () => {
    console.log('click');
  }

  const handleClickItemList = (item: ProductListItemProps) => {
    console.log(item);
  }

  return {
    productList: {
      items: productListSelected as Array<{ [key: string]: string }>,
      columnsHeader: productsCols,
      onClickItem: handleClickItemList,
    },
    productIdentifier: {
      onAddItem: handleAddItem,
      onClickMakePurchase: handleClickMakePurchase,
    }
  }
}