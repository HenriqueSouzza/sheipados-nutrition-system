import * as S from './Header.styles';
import { AccountCircle, Menu as MenuIcon } from '@/icons';
import { Menu, MenuItem } from '@mui/material';
import { useHeader } from './useHeader';

interface MenuProfileProps {
  anchorEl: HTMLElement | null
  onLogout: () => void
  onClose: () => void
  onProfilePage: () => void
}

const MenuProfile = ({ anchorEl, onLogout, onClose, onProfilePage }: MenuProfileProps) => (
  <Menu
    sx={{ mt: 3.8 }}
    anchorEl={anchorEl}
    keepMounted
    open={!!anchorEl}
    onClose={onClose}
  >
    <MenuItem onClick={onProfilePage}>Minha conta</MenuItem>
    <MenuItem onClick={onLogout}>Sair</MenuItem>
  </Menu>
)

interface HeaderProps {
  onSidebar: () => void
  handleHiddenSidebar: () => void
}

export const Header = ({ onSidebar, handleHiddenSidebar }: HeaderProps) => {
  const {
    onLogout,
    onProfilePage,
    handleMenu,
    handleClose,
    anchorEl,
  } = useHeader({ handleHiddenSidebar });

  return (
    <S.Header>
      <S.ButtonMenu onClick={onSidebar}>
        <MenuIcon />
      </S.ButtonMenu>
      <S.Button onClick={handleMenu}>
        <AccountCircle />
      </S.Button>
      <MenuProfile
        onLogout={onLogout}
        onProfilePage={onProfilePage}
        onClose={handleClose}
        anchorEl={anchorEl}
      />
    </S.Header>
  )
}