import { styled } from "@mui/material";
export {
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@/components";

import { TableCell as TableCellComponent } from '@/components';

export const Container = styled('div')({
  background: '#fff',
  padding: '10px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const SearchBar = styled('section')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const TableCell = styled(TableCellComponent)({
  cursor: 'pointer',
});
