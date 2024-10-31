import { BaseSyntheticEvent, SyntheticEvent, useCallback, useEffect, useState } from "react";

interface ProductListItemProps {
  id?: string
  productCode?: string
  productName?: string
  quantity?: string
  valueUnit?: string
  amount?: string
}

const productListSelectedTemp = [
  {
    id: '1',
    productCode: '123123',
    productName: 'Nome do Produto',
    quantity: '10',
    valueUnit: '10.00',
    amount: '100.00',
  },
  {
    id: '2',
    productCode: '4567',
    productName: 'Teste produto',
    quantity: '1',
    valueUnit: '10.50',
    amount: '10.50',
  },
];

export const useCashPage = () => {
  const [itemSelected, setItemSelected] = useState<ProductListItemProps>({});
  const [productListSelected, setProductListSelected] = useState<Array<ProductListItemProps>>(productListSelectedTemp);
  const [totalAmount, setTotalAmount] = useState<string>('0.00');

  const productListSelectedColumns = {
    id: '#',
    productCode: 'Código',
    productName: 'Nome do produto',
    quantity: 'Qtd',
    valueUnit: 'Valor Unit',
    amount: 'Total',
  }

  const calcAmount = useCallback(() => {
    let totalAmount = 0;
    productListSelected.forEach(product => {
      totalAmount = parseFloat(product.amount!) + totalAmount
    })
    setTotalAmount(totalAmount.toFixed(2))
  }, [productListSelected]);

  useEffect(() => {
    calcAmount();
  }, [calcAmount])

  const updateProductList = (quantity: number) => {
    const productListSelectedChange = productListSelected.map(product => {
      if (product.id === itemSelected.id) {
        return {
          ...product,
          quantity: String(quantity),
          amount: (parseFloat(itemSelected.valueUnit!) * quantity).toFixed(2)
        }
      }

      return product;
    })

    setProductListSelected(productListSelectedChange);
  }

  const updateItemSelected = (quantity: number) => {
    itemSelected.quantity = String(quantity);
    setItemSelected(itemSelected);
  }

  const removeItemProductList = () => {
    const productListFiltered = productListSelected.filter(product => product.id !== itemSelected.id);
    setProductListSelected(productListFiltered);
  }

  const handleAddItem = (e: BaseSyntheticEvent) => {
    e.preventDefault();
  }

  const handleClickSelectItem = (item: ProductListItemProps) => {
    setItemSelected(item);
  }

  const handleClickDisableModeEdition = () => {
    setItemSelected({})
  }

  const handleClickRemoveItem = (e: SyntheticEvent) => {
    e.preventDefault();
    removeItemProductList();
    productListSelected.length && handleClickDisableModeEdition()
  }

  const handleClickUpdateItem = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    updateItemSelected(Number(formData.get('quantity')))
    updateProductList(Number(formData.get('quantity')))
  }

  const handleClickMakePurchase = () => {
    console.log(productListSelected);
  }

  return {
    productList: {
      items: productListSelected as Array<{ [key: string]: string }>,
      columnsHeader: productListSelectedColumns,
      onSelectItem: handleClickSelectItem,
    },
    productIdentifier: {
      onAddItem: handleAddItem,
      onMakePurchase: handleClickMakePurchase,
      onUpdateItem: handleClickUpdateItem,
      onRemoveItem: handleClickRemoveItem,
      onDisableModeEdition: handleClickDisableModeEdition,
      itemSelected: itemSelected as Record<string, string>,
      totalAmount,
    }
  }
}