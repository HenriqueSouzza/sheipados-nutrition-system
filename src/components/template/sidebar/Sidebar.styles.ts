import { styled } from "@mui/material";

export const Sidebar = styled('nav')(({ theme }) => ({
  background: '#56a8ff',
  height: '100vh',
  width: 250,
  padding: 10,
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    display: 'none',
  },
}))