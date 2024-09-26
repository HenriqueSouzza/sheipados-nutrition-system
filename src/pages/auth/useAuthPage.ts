import { Paths } from "@/config";
import { useAuth } from "@/hooks";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormDataProps {
  username: string
  password: string
}

export const useAuthPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<FormDataProps>({
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const { onLogin, profile: { isActive }, loading } = useAuth();

  useEffect(() => {
    if (isActive) {
      navigate(Paths.ROOT)
    }
  }, [isActive, navigate])

  const onSubmit = async (data: FormDataProps) => await onLogin(data)

  return {
    onSubmit: handleSubmit(onSubmit),
    loading,
    control,
  }
}