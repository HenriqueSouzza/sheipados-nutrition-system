import { Header, Main, Sidebar } from "@/components"
import { styled } from "@mui/material"
import { ReactNode } from "react"

interface RootLayoutProps {
  children: ReactNode
}

const Container = styled('main')({
  display: "flex",
  height: '100vh',
})

export const RootLayout = ({ children }: RootLayoutProps) => (
  <Container>
    <Header>
      teste
    </Header>
    <Sidebar />
    <Main>{children}</Main>
  </Container>
)