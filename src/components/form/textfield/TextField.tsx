import { InputAdornment, TextField as TextFieldMUI, TextFieldProps as TextFieldMUIProps } from "@mui/material";
import { ReactNode } from "react";

type TextFieldProps = TextFieldMUIProps & {
  icon?: ReactNode
}

export const TextField = ({ icon = "a", ...props }: TextFieldProps) => (
  <TextFieldMUI
    slotProps={{
      input: {
        startAdornment: <InputAdornment position="start">{icon}</InputAdornment>
      }
    }}
    {...props}
  />
)
