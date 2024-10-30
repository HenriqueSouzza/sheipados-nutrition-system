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

export const ContainerCardBody = styled('div')(({ theme }) => ({
  overflowY: 'scroll',
  maxHeight: 660,
  'thead > tr > th': {
    fontWeight: 700,
  },
  'tbody > tr': {
    '&:hover': {
      background: 'rgba(0,0,0,.5)',
    }
  },
  [theme.breakpoints.down('md')]: {
    maxHeight: 220,
  }
}));

export const FlowFreeCash = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: 50,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: 20,
  },
}));

export const ProductIdentifier = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 350,
  gap: 25,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}))

export const ProductList = styled('section')(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 160px)',
  [theme.breakpoints.down('md')]: {
    height: 'calc(80vh - 400px)',
  }
}))

export const Card = styled('article')({
  borderRadius: 8,
  height: 'inherit',
  boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
});

export const CardTitle = styled('div')({
  borderRadius: '8px 8px 0px 0',
  padding: '5px 10px',
  background: '#1C4E80',
  color: '#ECDFCC',
});

export const CardBody = styled('div')({
  padding: '5px 10px',
});
