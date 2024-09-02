import { Paths } from "@/config";
import { useAuth } from "@/hooks";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormDataAuth {
  username: string
  password: string
}

export const useAuthPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<FormDataAuth>({
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const { onLogin } = useAuth();


  const onSubmit = (values: FormDataAuth) => {
    console.log(values)
    onLogin();
    navigate(Paths.ROOT);
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
  }
}