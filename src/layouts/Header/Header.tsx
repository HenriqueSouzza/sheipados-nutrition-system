import * as S from './Header.styles';
import { Login, Menu } from '@/icons';

interface HeaderProps {
  onLogout: () => void
  onSidebar: () => void
}

export const Header = ({ onLogout, onSidebar }: HeaderProps) => {
  return (
    <S.Header>
      <S.ButtonMenu onClick={onSidebar}>
        <Menu />
      </S.ButtonMenu>
      <S.Button onClick={onLogout}>
        <Login />
      </S.Button>
    </S.Header>
  )
}