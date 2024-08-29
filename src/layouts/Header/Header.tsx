import { Button } from '@/components';
import * as S from './Header.styles';
import { Login } from '@mui/icons-material';

interface HeaderProps {
  onLogout: () => void
}

export const Header = ({ onLogout }: HeaderProps) => {
  return (
    <S.Header>
      <Button onClick={onLogout}>
        <Login />
      </Button>
    </S.Header>
  )
}