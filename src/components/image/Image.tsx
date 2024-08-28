import { ImgHTMLAttributes } from "react"

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

export const Image = ({ alt = "logo", ...props }: ImageProps) => <img alt={alt} {...props} />
