import { useModal, useNotification, useUser } from "@/hooks";
import { UserDataProps } from "@/interface";
import { AlertProps } from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

const notificationsListUsers = {
  error: {
    type: 'error',
    feedbackText: 'Ocorreu um erro ao tentar criar novo usuário, informe o suporte!',
  },
  success: {
    type: 'success',
    feedbackText: 'Usuario criado com sucesso',
  },
}

export const useUsersPage = () => {
  const { handleModal, handleClose } = useModal();
  const { handleNotification } = useNotification();
  const { userList, onGet, onCreate, loading, error } = useUser();
  const [userListFilter, setUserListFilter] = useState<typeof userList>(userList);

  useEffect(() => {
    onGet();
  }, [onGet]);

  useEffect(() => {
    setUserListFilter(userList)
  }, [userList]);

  const setNotification = useCallback((type: 'success' | 'error') => {
    handleNotification(notificationsListUsers[type] as { type: AlertProps['color'], feedbackText: string });
  }, [handleNotification]);

  const afterRequest = useCallback(() => {
    if (error) {
      setNotification('error');
      return
    }

    setNotification('success');
    handleClose();
  }, [error, setNotification, handleClose]);

  const onChangeFilterBy = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const result = userList.filter(user => Object.values(user).find(field => String(field).includes(value)))
    setUserListFilter(result);
  }

  const onDeleteUser = (value: UserDataProps) => {
    console.log('delete', value)
  }

  const onEditUser = (values: UserDataProps) => {
    console.log('editar', values);
  }

  const onNewUser = ({ name, email }: UserDataProps) => {
    try {
      onCreate({ name, email });
    } finally {
      afterRequest();
    }
  }

  return {
    dataTable: {
      columns: {
        name: 'Nome Completo',
        username: 'Usuário',
        email: 'E-mail',
        isActive: 'Ativo',
        firstLogin: 'Primeiro login',
        actions: 'Ações',
      },
      rows: userListFilter as Array<{ [key: string]: string }>,
      onEdit: onDeleteUser,
      onDelete: onEditUser,
    },
    searchBar: {
      onChangeFilterBy,
      onNewUser,
    },
    handleModal,
    loading,
  }
}