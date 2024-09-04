import { Paths } from "@/config";
import { MenuItemProps } from "@/interface";
import { ListAlt, People } from "@/icons";


export const Menus: Array<MenuItemProps> = [
  {
    path: Paths.PRODUCTS,
    label: 'Produtos',
    icon: <ListAlt />,
  },
  {
    path: Paths.USERS,
    label: 'Usuários',
    icon: <People />,
  },
];
