import { styled, Typography } from "@mui/material";

export const DisplayLogo = styled('div')(({ theme }) => ({
  height: 60,
  textAlign: 'center',
  display: 'flex',
  alignItems: "center",
  justifyContent: 'center',
  background: '#1f374f',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  }
}));

export const Sidebar = styled('nav')<{ hidden?: boolean }>(({ theme, hidden }) => ({
  background: '#1C4E80',
  color: '#ECDFCC',
  width: 300,
  display: 'flex',
  flexDirection: 'column',
  transition: '0.5s cubic-bezier(.36, -0.01, 0, .77)',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    width: '100%',
    zIndex: 10,
    height: 'calc(100vh - 60px)',
    top: 60,
  },
  marginLeft: hidden ? '-100%' : 0,
}));

export const Menu = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  'a': {
    textDecoration: 'unset',
    color: 'inherit',
  }
});

export const MenuItem = styled('li')({
  padding: '10px 20px',
  cursor: "pointer",
  display: "flex",
  gap: 8,
  alignItems: 'flex-start',
  '&:hover': {
    background: '#0091D5',
  }
});

export const MenuItemText = styled(Typography)({
  fontWeight: 500,
});