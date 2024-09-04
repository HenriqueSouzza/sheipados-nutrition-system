import { styled } from "@mui/material";
import { Form as FormComponent } from "@/components";

export const Form = styled(FormComponent)({
  display: "flex",
  flexDirection: 'column',
  alignItems: 'center',
  gap: 30,
});

export const Row = styled('div')({
  display: 'flex',
  gap: 20,
});