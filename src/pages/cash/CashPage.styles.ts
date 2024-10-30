import { styled } from "@mui/material";

export const Container = styled('div')({
  background: '#fff',
  padding: '10px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const Title = styled('p')({
  margin: 0,
  fontSize: '24px',
  fontWeight: 500,
});

export const Amount = styled('p')({
  margin: 0,
  fontWeight: 700,
  fontSize: 24,
});

export const FlowFreeCash = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: 50,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: 20,
  },
}));