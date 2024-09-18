import { useModal } from "@/hooks";
import { ProductsProps } from "@/interface";
import { ChangeEvent } from "react";

interface DataProductProps {
  productCode: string
  productName: string
}

export const useUsersPage = () => {
  const { handleModal } = useModal();
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

  const onSubmitDeleteProduct = (value: DataProductProps) => {
    console.log('delete', value)
  }

  const onSubmitEditProduct = (values: DataProductProps) => {
    console.log('editar', values);
  }

  const onSubmitNewProduct = (values: DataProductProps) => {
    console.log('criar', values);
  }

  return {
    dataTable: {
      columns: {
        productCode: 'Código',
        productName: 'Nome do produto',
        actions: 'Actions',
      },
      rows: productList as Array<ProductsProps>,
      onSubmitEditProduct,
      onSubmitDeleteProduct,
      handleModal,
    },
    searchBar: {
      onChangeFilterBy,
      onSubmitNewProduct,
      handleModal,
    },
  }
}