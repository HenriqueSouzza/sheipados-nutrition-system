import { Box as BoxMUI, BoxProps as BoxMUIProps } from "@mui/material"

interface BoxProps extends BoxMUIProps { }

export const Box = (props: BoxProps) => <BoxMUI {...props} />