import { Cookies } from "react-cookie";
import { httpClient } from "./../httpClient";
import { getStorageItem } from "./../storage";

export const useAxiosInterceptor = () => {
  const cookies = new Cookies();

  httpClient.interceptors.request.use((config) => {
    const accessToken = getStorageItem("token");
    const refreshToken = cookies.get("refresh-token");

    if (config.headers && accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      config.headers["refreshToken"] = refreshToken;
    }
    return config;
  });
};
