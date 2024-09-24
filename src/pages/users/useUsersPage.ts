import { useModal, useUser } from "@/hooks";
import { UserDataProps } from "@/interface";
import { ChangeEvent, useEffect, useState } from "react";

export const useUsersPage = () => {
  const { handleModal } = useModal();
  const { userList, onGet, loading } = useUser();
  const [userListFilter, setUserListFilter] = useState<typeof userList>(userList);

  useEffect(() => {
    onGet({})
  }, [onGet]);

  useEffect(() => {
    setUserListFilter(userList)
  }, [userList])

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

  const onNewUser = (values: UserDataProps) => {
    console.log('criar', values);
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