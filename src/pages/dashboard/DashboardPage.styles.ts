import { Card as CardComponent } from "@/components";
import { styled, Typography } from "@mui/material";

export const Card = styled(CardComponent)(({ theme }) => ({
  width: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const CardTitle = styled(Typography)({
  fontSize: 24,
});

export const CardValue = styled(Typography)({
  fontWeight: 700,
  fontSize: 40,
});

export const CardInfo = styled(Typography)({
  fontSize: 16,
});

export const Container = styled('div')({
  display: "flex",
  flexDirection: 'column',
  gap: 10,
});

export const Performance = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
});