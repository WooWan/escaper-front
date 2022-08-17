import { httpClient } from "./../utils/httpClient";
export const login = async (id: number) => {
  const { data } = await httpClient.post("/api/login", { id: id });
  return data;
};
