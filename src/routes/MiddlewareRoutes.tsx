import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/hooks"
import { RootLayout } from "@/layouts";
import { Paths } from "@/config";

export const MiddlewareRoutes = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return 'loading....'
  }

  if (!user.authenticated) {
    return <Navigate to={Paths.AUTH} replace />
  }

  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}