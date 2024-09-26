import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks"
import { RootLayout } from "@/layouts";
import { Paths } from "@/config";
import { Loading } from "@/components";
import { useEffect } from "react";

export const MiddlewareRoutes = () => {
  const navigate = useNavigate();
  const { onLogout, onProfile, loading, profile: { authenticated, isActive, firstLogin } } = useAuth();

  useEffect(() => {
    onProfile();
  }, [onProfile])

  useEffect(() => {
    if (!authenticated) {
      navigate(Paths.AUTH);
    }

    if (isActive === false) {
      onLogout()
    }

    if (firstLogin) {
      navigate(Paths.PROFILE)
    }
  }, [authenticated, isActive, firstLogin, onLogout, navigate]);

  return (
    <>
      {loading ? (<Loading />) : null}
      <RootLayout>
        <Outlet />
      </RootLayout>
    </>
  )
}