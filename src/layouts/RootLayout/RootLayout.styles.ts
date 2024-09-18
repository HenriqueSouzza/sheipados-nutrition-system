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
  background: '#DADADA',
  height: 'calc(100% - 60px)',
  padding: 10,
});
