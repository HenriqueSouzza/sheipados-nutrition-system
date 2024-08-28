import { forwardRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

type PasswordProps = TextFieldProps

export const Password = forwardRef<HTMLInputElement, PasswordProps>(({ type = 'password', ...props }: PasswordProps, ref) => {
  const [visibility, setVisibility] = useState<boolean>(false);

  return (
    <TextField
      type={visibility ? 'text' : type}
      ref={ref}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment onClick={() => setVisibility(!visibility)} sx={{ cursor: 'pointer' }} position="start">
              {visibility ? (<Visibility />) : (<VisibilityOff />)}
            </InputAdornment>
          )
        }
      }}
      {...props}
    />
  )
})