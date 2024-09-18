import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/hooks"
import { RootLayout } from "@/layouts";
import { Paths } from "@/config";
import { Loading } from "@/components";

export const MiddlewareRoutes = () => {
  const { loading, user } = useAuth();

  return (
    <>
      {loading ? (<Loading />) : null}
      {!user.authenticated ? (
        <Navigate to={Paths.AUTH} replace />
      ) : (
        <RootLayout>
          <Outlet />
        </RootLayout>
      )}
    </>
  )
}