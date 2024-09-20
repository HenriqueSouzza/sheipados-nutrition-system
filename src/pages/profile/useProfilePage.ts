import { useAuth, useUser } from "@/hooks";
import { InputHTMLAttributes, useEffect } from "react";
import { Control, useForm } from "react-hook-form";

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
  const { profile: { name, email, username, firstLogin } } = useAuth();
  const { onUpdate, loading } = useUser()
  const { handleSubmit, control, reset } = useForm<ProfileFormDataProps>({
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
  }, [reset, name, email, username])

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

  const onSubmit = ({ name, username, password }: ProfileFormDataProps) => {
    onUpdate({ username, data: { name, password } });
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    fieldsForm,
    loading,
  }
}