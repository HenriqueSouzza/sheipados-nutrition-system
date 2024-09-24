import { styled } from "@mui/material";
import { Form as FormComponent } from "@/components";

export const Form = styled(FormComponent)({
  width: 350,
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  gap: 30,
});

export const Row = styled('div')({
  display: 'flex',
  gap: 20,
});