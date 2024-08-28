import { InputAdornment, TextField as TextFieldMUI, TextFieldProps as TextFieldMUIProps } from "@mui/material";
import { forwardRef, ReactNode } from "react";

type TextFieldProps = TextFieldMUIProps & {
  icon?: ReactNode
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ icon, ...props }: TextFieldProps, ref) => (
  <TextFieldMUI
    ref={ref}
    slotProps={{
      input: {
        startAdornment: <InputAdornment position="start">{icon}</InputAdornment>
      }
    }}
    {...props}
  />
));