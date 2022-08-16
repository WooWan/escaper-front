import { IRate } from "../types";
import { httpClient } from "./httpClient";

export const rateTheme = async ({ themeId, rate }: IRate) => {
  return await httpClient.post(`/api/review/${themeId}`, { rate });
};
