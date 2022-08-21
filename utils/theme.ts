import { httpClient } from "./httpClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function fetchThemeById(id: string | string[] | undefined) {
  const response = await httpClient.get(`/api/theme/${id}`);
  return await response.data;
}

export async function fetchPopularTheme() {
  const response = await httpClient.get("/api/themes/popular");
  return await response.data;
}

export async function fetchThemeByGenre(genre: string) {
  const response = await httpClient.get(`/api/themes/${genre}`);
  return await response.data;
}

export async function fetchThemeTypes() {
  const response = await httpClient.get(`/api/themes/type`);
  return await response.data;
}
interface IReviewRequest {
  themeId: string | string[] | undefined;
  memberId: number;
  review: string;
}

export const fetchReview = async (themeId: string | string[] | undefined) => {
  const response = await httpClient.get(`/api/review/${Number(themeId)}`);
  return response.data;
};

export function addReview({ themeId, memberId, review }: IReviewRequest) {
  console.log(memberId);
  return httpClient.post(`/api/review/${themeId}/member/${memberId}`, {
    content: review,
  });
}

export function useAddReview(themeId: string | string[] | undefined) {
  const queryClient = useQueryClient();
  return useMutation(addReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(["review", themeId]);
    },
  });
}
