import { InstanceAxios } from "@/lib";
import { useAuth } from "./useAuth";
import { useLayoutEffect } from "react";

export const useHttp = () => {
  const { profile: { accessToken, authenticated }, loading } = useAuth();

  useLayoutEffect(() => {
    InstanceAxios.interceptors.request.use(config => {
      // if (authenticated) {
      //   config.headers.Authorization = `Bearer ${accessToken}`
      // }
      return config;
    })
  }, [accessToken, authenticated])

  return { httpRequest: InstanceAxios, loading }
}