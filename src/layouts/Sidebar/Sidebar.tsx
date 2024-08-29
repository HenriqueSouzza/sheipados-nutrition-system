import { MenuItemProps, MenuProps } from '@/interface';
import * as S from './Sidebar.styles';
import { Link } from 'react-router-dom';

interface SidebarProps extends MenuProps { }

const Menu = ({ items }: MenuProps) => (
  <S.Menu>
    {items?.map(({ path, icon, label }: MenuItemProps) => (
      <Link key={path} to={path}>
        <S.MenuItem>
          {icon}
          <S.MenuItemText>{label}</S.MenuItemText>
        </S.MenuItem>
      </Link>
    ))}
  </S.Menu>
)

export const Sidebar = ({ items }: SidebarProps) => (
  <S.Sidebar>
    <S.DisplayLogo>logo</S.DisplayLogo>
    <Menu items={items} />
  </S.Sidebar>
)