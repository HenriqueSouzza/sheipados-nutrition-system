import { Paths } from "@/config";
import { MenuItemProps } from "@/interface";
import { Dashboard, ListAlt, People, Inventory, Assignment } from "@/icons";


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
  {
    path: Paths.STOCK,
    label: 'Estoque',
    icon: <Inventory />,
  },
  {
    path: Paths.USERS,
    label: 'Usuários',
    icon: <People />,
  },
  {
    path: Paths.REPORTS,
    label: 'Relatórios',
    icon: <Assignment />,
  },
];
