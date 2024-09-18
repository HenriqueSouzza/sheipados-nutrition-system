import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks"
import { RootLayout } from "@/layouts";
import { Paths } from "@/config";
import { Loading } from "@/components";
import { useEffect } from "react";

const Authenticated = ({ firstLogin = false }: { firstLogin?: boolean }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (firstLogin) {
      navigate(Paths.PROFILE)
    }
  }, [firstLogin, navigate])

  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}

export const MiddlewareRoutes = () => {
  const { loading, profile } = useAuth();

  return (
    <>
      {loading ? (<Loading />) : null}
      {!profile.authenticated ? (
        <Navigate to={Paths.AUTH} replace />
      ) : (
        <Authenticated firstLogin={profile.firstLogin} />
      )}
    </>
  )
}