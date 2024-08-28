import {
  TextField,
  Password,
  Button,
  Typography,
} from "@/components";
import { AccountCircle } from '@/icons';
import * as S from './AuthPage.styles';

export const AuthPage = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Img alt="logo sheipados" width={50} src={`/logo.jpeg`} />
          <Typography variant="h6">Bem-vindo</Typography>
        </S.Header>
        <S.Form>
          <TextField
            fullWidth
            type="text"
            label="username"
            icon={<AccountCircle />}
            placeholder="username"
          />
          <Password
            fullWidth
            type="password"
            label="password"
            placeholder="password"
          />
          <Button variant="contained" type="submit" size="large">Login</Button>
        </S.Form>
      </S.Content>
    </S.Container>
  )
};
