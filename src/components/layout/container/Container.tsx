import { Box as BoxMUI, BoxProps } from "@mui/material";

type ContainerProps = BoxProps

export const Container = (props: ContainerProps) => <BoxMUI component="main" {...props} />