import {
  TextField,
  Password,
  Typography,
  Loading,
} from "@/components";
import { AccountCircle } from '@/icons';
import * as S from './AuthPage.styles';
import { useAuthPage } from "./useAuthPage";
import { Controller } from "react-hook-form";

export const AuthPage = () => {
  const { onSubmit, control, loading } = useAuthPage();

  return (
    <S.Container>
      {loading ? (<Loading />) : null}
      <S.Content>
        <S.Header>
          <S.Img alt="logo sheipados" width={50} src={`/logo.jpeg`} />
          <Typography variant="h6">Bem-vindo</Typography>
        </S.Header>
        <S.Form onSubmit={onSubmit}>
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="username"
                type="text"
                placeholder="username"
                icon={<AccountCircle />}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <Password
                {...field}
                fullWidth
                type="password"
                label="password"
                placeholder="password"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <S.Button
            variant="contained"
            type="submit"
            size="large"
          >
            Login
          </S.Button>
        </S.Form>
      </S.Content>
    </S.Container>
  )
};
