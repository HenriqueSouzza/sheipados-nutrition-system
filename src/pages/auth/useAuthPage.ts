import { Paths } from "@/config";
import { useAuth } from "@/hooks";
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
  const { onLogin } = useAuth();


  const onSubmit = (values: FormDataProps) => {
    console.log(values)
    onLogin();
    navigate(Paths.ROOT);
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
  }
}