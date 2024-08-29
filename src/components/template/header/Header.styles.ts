import { styled } from "@mui/material";

export const Header = styled('header')(({ theme }) => ({
  color: '#ECDFCC',
  width: '100%',
  background: '#1E201E',
  height: 80,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))