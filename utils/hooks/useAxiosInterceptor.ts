import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { httpClient } from "../../service/httpClient";
import SessionStorage from "../../service/SessionStorage";

export const useAxiosInterceptor = () => {
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    httpClient.interceptors.request.use((config) => {
      const accessToken = cookies?.token;

      if (config.headers && accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    });
  });
};
