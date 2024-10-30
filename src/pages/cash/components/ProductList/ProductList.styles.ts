import { styled } from "@mui/material";

export const ProductList = styled('section')(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 160px)',
  [theme.breakpoints.down('md')]: {
    height: 'calc(80vh - 400px)',
  }
}));

export const ContainerCardBody = styled('div')(({ theme }) => ({
  overflowY: 'scroll',
  maxHeight: 660,
  'thead > tr > th': {
    fontWeight: 700,
  },
  'tbody > tr': {
    '&:hover': {
      cursor: 'pointer',
      background: 'rgba(0,0,0,.5)',
    }
  },
  [theme.breakpoints.down('md')]: {
    maxHeight: 220,
  }
}));