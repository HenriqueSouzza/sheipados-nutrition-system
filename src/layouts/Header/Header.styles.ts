import { Button as ButtonComponent } from '@/components';
import { styled } from "@mui/material";

export const Header = styled('header')({
  color: '#ECDFCC',
  width: '100%',
  background: '#194169',
  height: 60,
  padding: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Button = styled(ButtonComponent)({
  cursor: 'pointer',
  padding: 0,
  margin: 0,
  svg: {
    fill: '#fff',
  },
});

export const ButtonMenu = styled(Button)(({ theme }) => ({
  visibility: 'hidden',
  [theme.breakpoints.down('sm')]: {
    visibility: 'visible',
  },
}));