import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

type PasswordProps = TextFieldProps

export const Password = ({ type = 'password', ...props }: PasswordProps) => {
  const [visibility, setVisibility] = useState<boolean>(false);

  return (
    <TextField
      type={visibility ? 'text' : type}
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
}