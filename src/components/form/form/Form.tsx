import { FormHTMLAttributes } from "react";

type FormProps = FormHTMLAttributes<HTMLFormElement>

export const Form = (props: FormProps) => <form {...props} />