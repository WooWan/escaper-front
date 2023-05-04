import axios from 'axios'
import { store } from '@/src/store/config'
import { getCookie } from '../../utils/Cookie'

export const httpClient = axios.create({
  // baseURL: process.env.API_URL,
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    withCredentials: true,
  },
})

// httpClient.interceptors.request.use((config) => {
//   const configStore = store.getState();
//   const accessToken = configStore.token.accessToken || getCookie("token");
//   if (config.headers && accessToken) {
//     config.headers["Authorization"] = `Bearer ${accessToken}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// })
