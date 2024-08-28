import { HTMLAttributes } from "react";
import * as S from './Sidebar.styles';

interface SidebarProps extends HTMLAttributes<HTMLElement> { }

export const Sidebar = (props: SidebarProps) => <S.Sidebar {...props} />