import { ReactNode } from "react"

export interface MenuItemProps {
  path: string
  label: string
  icon: ReactNode
}

export interface MenuProps {
  items?: Array<MenuItemProps>
}