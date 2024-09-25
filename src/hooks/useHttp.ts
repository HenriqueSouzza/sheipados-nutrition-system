import { InstanceAxios } from "@/lib";
import { useAuth } from "./useAuth";
import { useEffect } from "react";

export const useHttp = () => {
  const { profile: { accessToken, authenticated } } = useAuth();

  useEffect(() => {
    InstanceAxios.interceptors.request.use(config => {
      if (authenticated) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
      return config;
    })
  }, [accessToken, authenticated])

  return InstanceAxios
}