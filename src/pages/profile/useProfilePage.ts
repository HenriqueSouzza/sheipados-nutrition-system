import { Paths } from "@/config";
import { useAuth, useNotification, useUser } from "@/hooks";
import { AlertProps } from "@mui/material";
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

const notificationsListUsers = {
  error: {
    type: 'error',
    feedbackText: 'Ocorreu um erro ao tentar atualizar os dados, informe o suporte!',
  },
  success: {
    type: 'success',
    feedbackText: 'Dados atualizados com sucesso'
  },
  info: {
    type: 'info',
    feedbackText: 'Nenhum campo foi alterado',
  }
}

export const useProfilePage = () => {
  const navigate = useNavigate();
  const { profile, onProfile, loading: loadingAuth } = useAuth();
  const { handleNotification } = useNotification();
  const { onUpdate, loading: loadingUser, error } = useUser();
  const loading = loadingUser || loadingAuth;
  const { handleSubmit, control, reset, formState: { isDirty } } = useForm<ProfileFormDataProps>();

  useEffect(() => {
    reset(profile);
  }, [reset, profile]);

  const setNotification = useCallback((type: 'info' | 'success' | 'error') => {
    handleNotification(notificationsListUsers[type] as { type: AlertProps['color'], feedbackText: string });
  }, [handleNotification]);

  const fieldsForm: ListFieldFormProps = [
    {
      label: 'Username',
      name: 'username',
      type: 'text',
      readOnly: true,
      placeholder: "username",
      value: profile.username,
      control,
    },
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      readOnly: true,
      value: profile.email,
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
      readOnly: !profile.firstLogin,
      value: '*******',
      rules: { required: true },
      placeholder: "digite sua senha",
      control,
    },
  ];

  const handleAfterRequest = useCallback(() => {
    if (error) {
      return setNotification('error');
    }

    setNotification('success');
    onProfile();
  }, [error, setNotification, onProfile])

  const onSubmit = useCallback(async ({ name, username, password, email }: ProfileFormDataProps) => {
    if (!isDirty) {
      return setNotification('info');
    }

    await onUpdate({ username, data: { name, password, email } });
    handleAfterRequest();
  }, [isDirty, onUpdate, handleAfterRequest, setNotification]);

  const handleRedirectPageRoot = () => {
    navigate(Paths.ROOT);
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    handleRedirectPageRoot,
    fieldsForm,
    loading,
    firstLogin: profile.firstLogin
  }
}