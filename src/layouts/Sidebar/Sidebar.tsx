import * as S from './Sidebar.styles';
import { Link } from 'react-router-dom';
import { MenuItemProps } from '@/interface';

interface MenuProps {
  items?: Array<MenuItemProps>
  onSidebar: () => void
}

interface SidebarProps extends MenuProps {
  hidden: boolean
}

const Menu = ({ items, onSidebar }: MenuProps) => (
  <S.Menu>
    {items?.map(({ path, icon, label }) => (
      <Link onClick={() => onSidebar()} key={path} to={path}>
        <S.MenuItem>
          {icon}
          <S.MenuItemText>{label}</S.MenuItemText>
        </S.MenuItem>
      </Link>
    ))}
  </S.Menu>
);

export const Sidebar = ({ items, hidden, onSidebar }: SidebarProps) => (
  <S.Sidebar hidden={hidden}>
    <S.DisplayLogo>logo</S.DisplayLogo>
    <Menu onSidebar={onSidebar} items={items} />
  </S.Sidebar>
);