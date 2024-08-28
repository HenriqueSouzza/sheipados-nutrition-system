import { useForm } from "react-hook-form";

interface FormDataAuth {
  username: string
  password: string
}

export const useAuthPage = () => {
  const { handleSubmit, control } = useForm<FormDataAuth>({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = (values: FormDataAuth) => {
    console.log(values)
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
  }
}