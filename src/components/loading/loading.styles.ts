import { styled } from "@mui/material";

export const Loading = styled('div')({
  width: '100%',
  height: '100vh',
  position: "fixed",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,.5)',
  zIndex: 2,
  'span > svg': {
    color: '#fff'
  }
});