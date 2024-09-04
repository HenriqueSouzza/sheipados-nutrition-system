import {
  Image,
  Form as FormComponent,
} from "@/components";
import { styled } from '@mui/material/styles';

export const Container = styled('div')({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)',
});

export const Header = styled('div')({
  display: "flex",
  flexDirection: 'column',
  alignItems: 'center',
});

export const Img = styled(Image)({
  padding: 5,
  borderRadius: 8,
});

export const Content = styled('div')(({ theme }) => ({
  width: 400,
  background: '#fff',
  padding: 16,
  borderRadius: 8,
  display: "flex",
  flexDirection: "column",
  gap: 20,
  [theme.breakpoints.down('sm')]: {
    height: '100vh',
    width: '100%',
    borderRadius: 0,
  },
}));

export const Form = styled(FormComponent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
});

