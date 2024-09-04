import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/hooks"
import { RootLayout } from "@/layouts";
import { Paths } from "@/config";

export const MiddlewareRoutes = () => {
  const { logged } = useAuth();

  if (logged) {
    return <Navigate to={Paths.AUTH} replace />
  }

  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}