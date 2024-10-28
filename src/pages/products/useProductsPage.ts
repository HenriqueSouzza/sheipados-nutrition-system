import { useModal } from "@/hooks";
import { ProductsDataProps } from "@/interface";
import { ChangeEvent } from "react";

export const useProductsPage = () => {
  const { handleModal } = useModal();
  const loading = false;
  const productList = [
    {
      productCode: '123456789',
      productName: 'Whey Protein'
    },
  ];

  const onChangeFilterBy = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log('filter by', value)
  }

  const onDeleteProduct = (value: ProductsDataProps) => {
    console.log('delete', value)
  }

  const onEditProduct = (values: ProductsDataProps) => {
    console.log('editar', values);
  }

  const onNewProduct = (values: ProductsDataProps) => {
    console.log('criar', values);
  }

  return {
    dataTable: {
      columns: {
        productCode: 'Código',
        productName: 'Nome do produto',
        actions: 'Actions',
      },
      rows: productList as Array<{ [key: string]: string }>,
      onEdit: onEditProduct,
      onDelete: onDeleteProduct,
      handleModal,
    },
    searchBar: {
      onChangeFilterBy,
      onNewProduct,
      handleModal,
    },
    handleModal,
    loading,
  }
}