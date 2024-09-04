import { styled } from "@mui/material";

export const SearchBar = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    alignItems: 'start',
    gap: 20,
  },
}));