import { Paths } from "@/config";
import { useAuth, useNotification, useUser } from "@/hooks";
import { InputHTMLAttributes, useCallback, useEffect } from "react";
import { Control, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export interface ProfileFormDataProps {
  name: string
  username: string
  email: string
  password: string
}

export interface FieldFormProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<ProfileFormDataProps>
  label: string
  name: keyof ProfileFormDataProps
  readonly?: boolean
  value?: string
  rules?: {
    required: boolean
  }
}

interface ListFieldFormProps extends Array<FieldFormProps> { }

export const useProfilePage = () => {
  const navigate = useNavigate();
  const { profile: { name, email, username, firstLogin } } = useAuth();
  const { handleNotification } = useNotification();
  const { onUpdate, loading, error } = useUser()
  const { handleSubmit, control, reset, formState: { isDirty } } = useForm<ProfileFormDataProps>({
    defaultValues: {
      name,
      username,
      email,
    }
  });

  useEffect(() => {
    reset({
      name,
      email,
      username
    });
  }, [reset, name, email, username]);

  const fieldsForm: ListFieldFormProps = [
    {
      label: 'Username',
      name: 'username',
      type: 'text',
      readOnly: true,
      placeholder: "username",
      value: username,
      control,
    },
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      readOnly: true,
      value: email,
      placeholder: "email",
      control,
    },
    {
      label: 'Nome Social',
      name: 'name',
      type: 'text',
      rules: { required: true },
      placeholder: "name",
      control,
    },
    {
      label: 'Senha',
      name: 'password',
      type: 'password',
      readOnly: !firstLogin,
      value: '*******',
      rules: { required: true },
      placeholder: "digite sua senha",
      control,
    },
  ];

  const onSubmit = useCallback(({ name, username, password }: ProfileFormDataProps) => {
    if (!isDirty) {
      handleNotification({
        type: 'info',
        feedbackText: 'Nenhum campo foi alterado',
      });
      return;
    }

    onUpdate({ username, data: { name, password } });
    handleNotification({
      type: error ? 'error' : 'success',
      feedbackText: error ? 'Ocorreu um erro ao tentar atualizar os dados, informe o suporte!' : 'Dados atualizados com sucesso',
    })

    if (!error) {
      navigate(Paths.ROOT);
    }
  }, [error, isDirty, handleNotification, onUpdate, navigate]);

  return {
    onSubmit: handleSubmit(onSubmit),
    fieldsForm,
    loading,
  }
}