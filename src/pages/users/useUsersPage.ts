import { useModal, useUser } from "@/hooks";
import { UserDataProps } from "@/interface";
import { ChangeEvent, useEffect } from "react";

export const useUsersPage = () => {
  const { handleModal } = useModal();
  const { userList, onGet, loading } = useUser();

  useEffect(() => {
    onGet({})
  }, [onGet]);

  const onChangeFilterBy = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log('filter by', value)
  }

  const onDeleteUser = (value: UserDataProps) => {
    console.log('delete', value)
  }

  const onEditUser = (values: UserDataProps) => {
    console.log('editar', values);
  }

  const onSubmitNewProduct = (values: UserDataProps) => {
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
      rows: userList as Array<{ [key: string]: string }>,
      onEdit: onDeleteUser,
      onDelete: onEditUser,
    },
    searchBar: {
      onChangeFilterBy,
      onSubmitNewProduct,
      handleModal,
    },
    loading,
  }
}