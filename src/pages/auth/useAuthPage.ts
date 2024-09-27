import { Paths } from "@/config";
import { useAuth, useNotification } from "@/hooks";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormDataProps {
  username: string
  password: string
}

export const useAuthPage = () => {
  const navigate = useNavigate();
  const { handleNotification } = useNotification();
  const { handleSubmit, control } = useForm<FormDataProps>({
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const { onLogin, profile: { isActive }, loading, error } = useAuth();

  useEffect(() => {
    if (isActive) {
      navigate(Paths.ROOT)
    }
  }, [isActive, navigate]);

  const handleAfterRequest = useCallback(() => {
    if (error) {
      handleNotification({ type: 'error', feedbackText: String(error) })
    }
  }, [error, handleNotification])

  const onSubmit = async (data: FormDataProps) => {
    await onLogin(data)
    handleAfterRequest();
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    loading,
    control,
  }
}