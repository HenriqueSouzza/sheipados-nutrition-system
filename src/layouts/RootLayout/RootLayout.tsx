import { ReactNode } from "react";
import * as S from './RootLayout.styles';
import { useAuth } from "@/hooks";
import { Menus } from "@/constants";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";

interface RootLayoutProps {
  children: ReactNode
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const { onLogout } = useAuth();

  return (
    <S.Container>
      <Sidebar items={Menus} />
      <S.Main>
        <Header onLogout={onLogout} />
        <S.Content>
          {children}
        </S.Content>
      </S.Main>
    </S.Container>
  )
}