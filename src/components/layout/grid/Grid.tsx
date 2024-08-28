import { Grid2 as GridMUI, Grid2Props } from "@mui/material";

interface GridProps extends Grid2Props { }

export const Grid = (props: GridProps) => <GridMUI {...props} />