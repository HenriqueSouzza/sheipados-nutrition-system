import { InstanceAxios } from "@/lib";

const get = (username: string) => InstanceAxios.get(`/users/${username ?? ''}`);
const update = (username: string, data: { name?: string, password?: string }) => InstanceAxios.put(`/users/${username}`, data);
const create = (data: { name?: string, email?: string }) => InstanceAxios.post(`/users`, data);

export const userHttp = {
  update,
  get,
  create
}