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
  rules?: {
    required: boolean
  }
}

interface ListFieldFormProps extends Array<FieldFormProps> { }

export const useProfilePage = () => {
  const { profile: { name, email, username }, onProfile } = useAuth();
  const { onUpdate, loading } = useUser()
  const { handleSubmit, control } = useForm<ProfileFormDataProps>({
    defaultValues: {
      name,
      username,
      email,
      password: '',
    }
  });

  const fieldsForm: ListFieldFormProps = [
    {
      label: 'username',
      name: 'username',
      type: 'text',
      disabled: true,
      placeholder: "username",
      control,
    },
    {
      label: 'email',
      name: 'email',
      type: 'text',
      disabled: true,
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
      type: 'text',
      placeholder: "senha",
      control,
    },
  ]

  useEffect(() => {
    if (!loading) {
      onProfile()
    }
  }, [loading, onProfile])

  const onSubmit = ({ name, username }: ProfileFormDataProps) => {
    onUpdate({ username, data: { name } });
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    fieldsForm
  }
}