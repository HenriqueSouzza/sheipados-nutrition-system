import { ProductsProps } from "@/interface";
import { ChangeEvent } from "react";

export const useProductsPage = () => {
  const productList = [
    {
      id: '1',
      productCode: '123456789',
      productName: 'Whey Protein'
    },
  ];

  const onEditProduct = (item: ProductsProps) => {
    console.log(item);
  }

  const onChangeFilterBy = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log('filter by', value)
  }

  const onClickNewProduct = () => {
    console.log('new product')
  }

  return {
    dataTable: {
      columns: {
        id: '#',
        productCode: 'Código',
        productName: 'Nome do produto',
        actions: 'Actions',
      },
      rows: productList as Array<ProductsProps>,
      actions: {
        onEditProduct,
      }
    },
    searchBar: {
      onChangeFilterBy,
      onClickNewProduct
    },
  }
}