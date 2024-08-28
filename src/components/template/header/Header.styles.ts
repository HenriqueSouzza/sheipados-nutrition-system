import { styled } from "@mui/material";

export const Header = styled('header')(({ theme }) => ({
  width: 'calc(100% - 250px)',
  background: '#bae1ff',
  height: 60,
  position: "fixed",
  right: 0,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))