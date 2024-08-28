import {
  Container as ContainerComponent,
  Image,
  Form as FormComponent,
} from "@/components";
import { styled } from '@mui/material/styles';

export const Container = styled(ContainerComponent)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(156.8deg, rgb(30, 144, 231) 27.1%, rgb(67, 101, 225) 77.8%)',
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
  },
}));

export const Form = styled(FormComponent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
});

