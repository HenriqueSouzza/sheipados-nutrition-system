import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks"
import { RootLayout } from "@/layouts";
import { Paths } from "@/config";
import { Loading } from "@/components";
import { useEffect } from "react";

export const MiddlewareRoutes = () => {
  const navigate = useNavigate();
  const { loading, profile: { authenticated, firstLogin } } = useAuth();

  useEffect(() => {
    if (!authenticated) {
      navigate(Paths.AUTH);
    }

    if (firstLogin) {
      navigate(Paths.PROFILE)
    }
  }, [authenticated, firstLogin, navigate]);

  return (
    <>
      {loading ? (<Loading />) : null}
      <RootLayout>
        <Outlet />
      </RootLayout>
    </>
  )
}