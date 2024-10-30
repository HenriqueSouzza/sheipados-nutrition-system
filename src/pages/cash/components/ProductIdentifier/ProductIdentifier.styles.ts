import { Form as FormComponent } from "@/components";
import { styled } from "@mui/material";

export const ProductIdentifier = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 350,
  gap: 25,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));

export const Form = styled(FormComponent)({
  display: 'flex',
  gap: 25,
  flexDirection: 'column',
})

export const Amount = styled('p')({
  margin: 0,
  fontWeight: 700,
  fontSize: 24,
});