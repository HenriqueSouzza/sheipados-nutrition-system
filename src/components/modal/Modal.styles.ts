import { Modal as ModalComponent, Box, styled } from "@mui/material";

export const Modal = styled(ModalComponent)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:focus-visible': {
    outline: 'none',
  }
})

export const Content = styled(Box)(({ theme }) => ({
  width: 700,
  height: '40vh',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 8,
  padding: 20,
  background: '#fff',
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '100vh',
    borderRadius: 0,
    padding: '50px 10px',
  },
}));

export const Close = styled('div')({
  textAlign: 'right',
  position: "absolute",
  right: 10,
  cursor: 'pointer',
})