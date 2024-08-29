import { styled, Typography } from "@mui/material";

export const DisplayLogo = styled('div')({
  height: 80,
  textAlign: 'center',
  display: 'flex',
  alignItems: "center",
  justifyContent: 'center',
  background: '#3C3D37',
})

export const Sidebar = styled('nav')(({ theme }) => ({
  background: '#1E201E',
  color: '#ECDFCC',
  width: 300,
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    display: 'none',
  },
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
  padding: 10,
  cursor: "pointer",
  display: "flex",
  gap: 8,
  alignItems: 'flex-start',
  '&:hover': {
    background: '#3C3D37',
  }
});

export const MenuItemText = styled(Typography)({
  fontWeight: 500,
});