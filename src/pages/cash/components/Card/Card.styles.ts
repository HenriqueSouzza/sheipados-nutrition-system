import { styled } from "@mui/material";

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