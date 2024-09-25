import { useModal, useNotification, useUser } from "@/hooks";
import { UserDataProps } from "@/interface";
import { AlertProps } from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

const notificationsListUsers = {
  create: {
    error: {
      type: 'error',
      feedbackText: 'Ocorreu um erro ao tentar criar novo usuário, informe o suporte!',
    },
    success: {
      type: 'success',
      feedbackText: 'Usuário criado com sucesso!',
    },
  },
  update: {
    error: {
      type: 'error',
      feedbackText: 'Ocorreu um erro ao tentar atualizar os dados do usuário, informe o suporte!',
    },
    success: {
      type: 'success',
      feedbackText: 'Os dados do usuário foi atualizado com sucesso!',
    },
  },
  delete: {
    error: {
      type: 'error',
      feedbackText: 'Ocorreu um erro ao tentar delete o usuário, informe o suporte!',
    },
    success: {
      type: 'success',
      feedbackText: 'Usuário removido com sucesso!',
    },
  }
}

export const useUsersPage = () => {
  const { handleModal, handleClose } = useModal();
  const { handleNotification } = useNotification();
  const { userList, onGet, onCreate, onUpdate, onDelete, loading, error } = useUser();
  const [userListFilter, setUserListFilter] = useState<typeof userList>(userList);

  useEffect(() => {
    onGet();
  }, [onGet]);

  useEffect(() => {
    setUserListFilter(userList)
  }, [userList]);

  const setNotification = useCallback((action: 'create' | 'update' | 'delete', type: 'success' | 'error') => {
    handleNotification(notificationsListUsers[action][type] as { type: AlertProps['color'], feedbackText: string });
  }, [handleNotification]);

  const afterRequest = useCallback(async (action: 'create' | 'update' | 'delete') => {
    if (error) {
      setNotification(action, 'error');
      return
    }

    setNotification(action, 'success');
    handleClose();
  }, [error, setNotification, handleClose]);

  const onChangeFilterBy = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const result = userList.filter(user => Object.values(user).find(field => String(field).includes(value)))
    setUserListFilter(result);
  }

  const onDeleteUser = ({ username = '' }: UserDataProps) => {
    try {
      onDelete(username)
    } finally {
      afterRequest('delete');
    }
  }

  const onEditUser = ({ username, ...values }: UserDataProps) => {
    try {
      onUpdate({ username, data: { ...values } });
    } finally {
      afterRequest('update');
    }
  }

  const onNewUser = ({ name, email }: UserDataProps) => {
    try {
      onCreate({ name, email });
    } finally {
      afterRequest('create');
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
      onEdit: onEditUser,
      onDelete: onDeleteUser,
    },
    searchBar: {
      onChangeFilterBy,
      onNewUser,
    },
    handleModal,
    loading,
  }
}