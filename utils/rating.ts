import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IRatingRequest } from "../interfaces";
import { httpClient } from "./httpClient";

export const rateTheme = async ({
  themeId,
  memberId,
  rating,
}: IRatingRequest) => {
  return await httpClient.post(`/api/rate/${themeId}/member/${memberId}`, {
    rating,
  });
};

export const useRateTheme = (
  memberId: number | undefined,
  themeId: string | string[] | undefined
) => {
  const queryClient = useQueryClient();
  return useMutation(rateTheme, {
    onSuccess: () => {
      queryClient.invalidateQueries(["rating", memberId, themeId]);
    },
  });
};
