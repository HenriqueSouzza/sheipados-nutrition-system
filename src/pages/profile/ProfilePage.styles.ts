import {
  Form as FormComponent,
  Button as ButtonComponent,
} from "@/components";
import { styled, Link as LinkComponent } from "@mui/material";

export const Container = styled('div')({
  width: '100%',
  background: '#fff',
  padding: 20,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const Section = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
})

export const TitlePage = styled('p')({
  fontSize: 24,
  fontWeight: 700,
  margin: 0,
  padding: 0,
});

export const Form = styled(FormComponent)({
  maxWidth: 400,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 20,
});

export const FieldTextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const Field = styled(TitlePage)({
  fontSize: 16,
  fontWeight: 500,
});

export const Button = styled(ButtonComponent)({
  width: 100,
});

export const Actions = styled('div')({
  display: 'flex',
  gap: 20,
  alignItems: 'center',
});

export const Link = styled(LinkComponent)({
  cursor: 'pointer'
});