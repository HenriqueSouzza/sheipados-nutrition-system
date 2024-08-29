import { styled } from "@mui/material"

export const Container = styled('main')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

export const Main = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const Content = styled('section')({
  background: '#3C3D37',
  height: 'calc(100% - 80px)',
  padding: 10,
});
