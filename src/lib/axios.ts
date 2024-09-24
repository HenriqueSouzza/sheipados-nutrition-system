import axios from 'axios';
import Cookies from "js-cookie";

const accessToken = Cookies.get('accessToken');
const isAuthenticated = Cookies.get('authenticated') === 'true';

const InstanceAxios = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    'Content-Type': 'application/json',
    Authorization: isAuthenticated ? `Bearer ${accessToken}` : null
  },
});

InstanceAxios.interceptors.request.use(config => {
  if (isAuthenticated) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config;
})

export default InstanceAxios;