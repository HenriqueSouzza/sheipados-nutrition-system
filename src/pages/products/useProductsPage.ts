import { useModal, useNotification, useProducts } from "@/hooks";
import { ProductsDataProps } from "@/interface";
import { AlertProps } from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

const notificationsListUsers = {
  create: {
    error: {
      type: 'error',
      feedbackText: 'Ocorreu um erro ao tentar criar novo produto, informe o suporte!',
    },
    success: {
      type: 'success',
      feedbackText: 'Produto criado com sucesso!',
    },
  },
  update: {
    error: {
      type: 'error',
      feedbackText: 'Ocorreu um erro ao tentar atualizar os dados do produto, informe o suporte!',
    },
    success: {
      type: 'success',
      feedbackText: 'Os dados do produto foi atualizado com sucesso!',
    },
  },
  delete: {
    error: {
      type: 'error',
      feedbackText: 'Ocorreu um erro ao tentar remover o produto, informe o suporte!',
    },
    success: {
      type: 'success',
      feedbackText: 'Produto removido com sucesso!',
    },
  },
  disable: {
    error: {
      type: 'error',
      feedbackText: 'Ocorreu um erro ao tentar desativar o produto, informe o suporte!',
    },
    success: {
      type: 'success',
      feedbackText: 'Produto desativado com sucesso!',
    },
  }
}

export const useProductsPage = () => {
  const { handleModal, handleClose } = useModal();
  const { handleNotification } = useNotification();
  const { loading, productList, error, onGet, onCreate, onUpdate, onDelete } = useProducts();
  const [productListFilter, setProductListFilter] = useState<typeof productList>(productList);

  useEffect(() => {
    onGet();
  }, [onGet]);

  useEffect(() => {
    setProductListFilter(productList)
  }, [productList]);

  const setNotification = useCallback((action: 'create' | 'update' | 'delete' | 'disable', type: 'success' | 'error') => {
    handleNotification(notificationsListUsers[action][type] as { type: AlertProps['color'], feedbackText: string });
  }, [handleNotification]);

  const handleAfterRequest = useCallback(async (action: 'create' | 'update' | 'delete' | 'disable') => {
    if (error) {
      setNotification(action, 'error');
      return
    }

    setNotification(action, 'success');
    onGet()
    handleClose();
  }, [error, onGet, setNotification, handleClose]);

  const onChangeFilterBy = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const result = productList.filter((product: ProductsDataProps) => Object.values(product).find(field => String(field).includes(value)));
    setProductListFilter(result);
  }

  const onDeleteProduct = useCallback(async (values: ProductsDataProps) => {
    await onDelete(values.code_ean ?? '');
    await handleAfterRequest('update');
  }, [onDelete, handleAfterRequest]);

  const onDisableProduct = useCallback(async (values: ProductsDataProps) => {
    await onUpdate({ code: values.code_ean ?? '', body: { ...values, is_active: false } });
    await handleAfterRequest('disable');
  }, [onUpdate, handleAfterRequest]);

  const onEditProduct = useCallback(async (values: ProductsDataProps) => {
    await onUpdate({ code: values.code_ean ?? '', body: values });
    await handleAfterRequest('update');
  }, [onUpdate, handleAfterRequest]);

  const onNewProduct = useCallback(async (values: ProductsDataProps) => {
    await onCreate(values);
    await handleAfterRequest('create');
  }, [onCreate, handleAfterRequest]);

  return {
    dataTable: {
      columns: {
        code_ean: 'Código EAN',
        product_name: 'Nome do produto',
        expired_date: 'Data de expiração',
        is_active: 'Ativo',
        actions: 'Actions',
      },
      rows: productListFilter as Array<{ [key: string]: string }>,
      onEdit: onEditProduct,
      onDisable: onDisableProduct,
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