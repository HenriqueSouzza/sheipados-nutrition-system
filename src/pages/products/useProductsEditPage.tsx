import { Paths } from "@/config";
import { useNotification, useProducts } from "@/hooks";
import { ProductsDataProps } from "@/interface";
import { AlertProps } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom"

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

export const useProductsEditPage = () => {
  const { code_ean } = useParams();
  const { handleNotification } = useNotification();
  const navigate = useNavigate();
  const { loading, error, product, onGet, onUpdate, onCreate } = useProducts();
  const { reset, handleSubmit, control } = useForm<ProductsDataProps>();

  useEffect(() => {
    onGet(code_ean);
  }, [onGet, code_ean]);

  useEffect(() => {
    reset(product);
  }, [reset, product]);

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
    if (action === 'create') {
      navigate(Paths.PRODUCTS);
    }

  }, [error, onGet, setNotification, navigate]);

  const onSubmitEdit = useCallback(async (values: ProductsDataProps) => {
    await onUpdate({ code: values.code_ean ?? '', body: values });
    await handleAfterRequest('update');
  }, [onUpdate, handleAfterRequest]);

  const onSubmitCreate = useCallback(async (value: ProductsDataProps) => {
    await onCreate({ ...value, is_active: value?.is_active ?? false });
    await handleAfterRequest('create');
  }, [onCreate, handleAfterRequest]);

  return {
    onSubmitEdit: handleSubmit(onSubmitEdit),
    onSubmitCreate: handleSubmit(onSubmitCreate),
    control,
    loading
  }
}