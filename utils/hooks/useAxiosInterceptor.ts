import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { httpClient } from "../../service/httpClient";
import SessionStorage from "../../service/SessionStorage";

export const useAxiosInterceptor = () => {
  const [storage] = useState(() => new SessionStorage());
  const cookies = new Cookies();

  useEffect(() => {
    httpClient.interceptors.request.use((config) => {
      const accessToken = storage.getStorageItem("token");
      const refreshToken = cookies.get("refresh-token");

      if (config.headers && accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        config.headers["refreshToken"] = refreshToken;
      }
      return config;
    });
  });
};
