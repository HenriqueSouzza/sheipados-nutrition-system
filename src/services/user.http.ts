import { InstanceAxios } from "@/lib"

const update = (username: string, data: { name?: string, password?: string }, accessToken: string) => InstanceAxios.put(`/users/${username}`, data, { headers: { Authorization: `Bearer ${accessToken}` } });

export const userHttp = { update }