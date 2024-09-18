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
  const { onLogin, profile, loading } = useAuth();

  useEffect(() => {
    if (profile.authenticated) {
      navigate(Paths.ROOT);
    }
  }, [profile, navigate]);

  const onSubmit = ({ username, password }: FormDataProps) => {
    onLogin(username, password);
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    loading,
    control,
  }
}