import { InstanceAxios } from "@/lib"

const login = (username: string, password: string) => InstanceAxios.post('/auth/login', { username, password });

const profile = (accessToken: string) => InstanceAxios.get('/auth/profile', {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

export const authHttp = { login, profile }