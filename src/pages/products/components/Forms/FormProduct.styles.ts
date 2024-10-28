import { styled } from "@mui/material";
import { Form as FormComponent } from "@/components";

export const Form = styled(FormComponent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
});

export const Section = styled('section')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20,
});

export const Title = styled('p')({})