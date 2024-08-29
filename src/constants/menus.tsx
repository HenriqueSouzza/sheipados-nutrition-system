import { Paths } from "@/config";
import { MenuItemProps } from "@/interface";
import { Dashboard, ListAlt } from "@mui/icons-material";

export const Menus: Array<MenuItemProps> = [
  {
    path: Paths.DASHBOARD,
    label: 'Dashboard',
    icon: <Dashboard />,
  },
  {
    path: Paths.PRODUCTS,
    label: 'Produtos',
    icon: <ListAlt />,
  },
];
