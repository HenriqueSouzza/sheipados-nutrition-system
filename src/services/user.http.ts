import { InstanceAxios } from "@/lib"

const get = (username: string, accessToken: string) => InstanceAxios.get(`/users/${username ?? ''}`, { headers: { Authorization: `Bearer ${accessToken}` } });
const update = (username: string, data: { name?: string, password?: string }, accessToken: string) => InstanceAxios.put(`/users/${username}`, data, { headers: { Authorization: `Bearer ${accessToken}` } });

export const userHttp = { update, get }