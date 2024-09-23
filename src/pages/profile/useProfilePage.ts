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
    feedback: 'Nenhum campo foi alterado',
  }
}

export const useProfilePage = () => {
  const navigate = useNavigate();
  const { profile: { name, email, username, firstLogin }, onProfile } = useAuth();
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

  const setNotification = useCallback((type: 'info' | 'success' | 'error') => {
    handleNotification(notificationsListUsers[type] as { type: AlertProps['color'], feedbackText: string });
  }, [handleNotification]);

  const refreshProfile = useCallback(() => {
    try {
      onProfile()
    } finally {
      navigate(Paths.ROOT);
    }
  }, [navigate, onProfile])

  const onSubmit = useCallback(({ name, username, password }: ProfileFormDataProps) => {
    if (!isDirty) {
      return setNotification('info');
    }

    try {
      onUpdate({ username, data: { name, password } });
    } finally {
      setNotification(error ? 'error' : 'success');
      refreshProfile();
    }
  }, [error, isDirty, onUpdate, refreshProfile, setNotification]);

  return {
    onSubmit: handleSubmit(onSubmit),
    fieldsForm,
    loading,
  }
}