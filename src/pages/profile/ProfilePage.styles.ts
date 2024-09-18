import {
  Form as FormComponent,
  Button as ButtonComponent,
} from "@/components";
import { styled } from "@mui/material";

export const Container = styled('div')({
  background: '#fff',
  padding: 20,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const TitlePage = styled('p')({
  fontSize: 24,
  fontWeight: 700,
  margin: 0,
  padding: 0,
});

export const Form = styled(FormComponent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 20,
  maxWidth: 400,
});

export const Button = styled(ButtonComponent)({
  width: 100,
});