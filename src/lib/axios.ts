import axios from 'axios';

export const InstanceAxios = axios.create({
  baseURL: import.meta.env.VITE_API
})