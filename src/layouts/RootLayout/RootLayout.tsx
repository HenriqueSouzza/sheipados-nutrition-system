import { ReactNode } from "react";
import { Header, Main, Sidebar } from "@/components";
import * as S from './RootLayout.styles';
import { styled } from "@mui/material";
import { Dashboard, ListAlt, ReceiptLong } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface RootLayoutProps {
  children: ReactNode
}

const DisplayLogo = styled('div')({
  height: 80,
  textAlign: 'center',
  display: 'flex',
  alignItems: "center",
  justifyContent: 'center',
  background: '#3C3D37',
})

const Menu = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  'a': {
    textDecoration: 'unset',
    color: 'inherit',
  }
});

const MenuItem = styled('li')({
  padding: 10,
  cursor: "pointer",
  display: "flex",
  gap: 8,
  alignItems: 'flex-start',
  '&:hover': {
    background: '#3C3D37',
  }
});

const MenuItemText = styled('div')({

});

const MenuItemIcon = styled('div')({

});


export const RootLayout = ({ children }: RootLayoutProps) => (
  <S.Container>
    <Sidebar>
      <DisplayLogo>logo</DisplayLogo>
      <Menu>
        <Link to="/dashboard">
          <MenuItem>
            <MenuItemIcon><Dashboard /></MenuItemIcon>
            <MenuItemText>Dashboard</MenuItemText>
          </MenuItem>
        </Link>
        <Link to="/stock">
          <MenuItem>
            <MenuItemIcon><ListAlt /></MenuItemIcon>
            <MenuItemText>Estoque</MenuItemText>
          </MenuItem>
        </Link>
        <Link to="/products">
          <MenuItem>
            <MenuItemIcon><ReceiptLong /></MenuItemIcon>
            <MenuItemText>Produto</MenuItemText>
          </MenuItem>
        </Link>
      </Menu>
    </Sidebar>
    <Main>
      <Header>
        test
      </Header>
      <S.Content>
        {children}
      </S.Content>
    </Main>
  </S.Container>
)