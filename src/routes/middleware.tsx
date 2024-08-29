import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/hooks"
import { RootLayout } from "@/layouts";

export const Middleware = () => {
  const { logged } = useAuth();

  if (!logged) {
    return <Navigate to="/auth" replace />
  }

  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}