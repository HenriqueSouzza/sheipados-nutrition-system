import { ReactNode } from "react";
import * as S from './RootLayout.styles';
import { Menus } from "@/constants";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { useRootLayout } from "./useRootLayout";

interface RootLayoutProps {
  children: ReactNode
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const { onLogout, handleSidebar, hiddenSidebar } = useRootLayout();

  return (
    <S.Container>
      <Sidebar onSidebar={handleSidebar} hidden={hiddenSidebar} items={Menus} />
      <S.Main>
        <Header onSidebar={handleSidebar} onLogout={onLogout} />
        <S.Content>
          {children}
        </S.Content>
      </S.Main>
    </S.Container>
  )
}