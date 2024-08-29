import { styled } from "@mui/material";

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
}))