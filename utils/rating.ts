import { IRate } from "../interfaces";
import { httpClient } from "./httpClient";

export const rateTheme = async ({ themeId, memberId, rating }: IRate) => {
  return await httpClient.post(`/api/rate/${themeId}/member/${memberId}`, {
    rating,
  });
};
