import {
  IThemeDetail,
  IMemberRating as IMemberRating,
} from "./../interfaces/theme.d";
import { httpClient } from "./httpClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function fetchThemeRatingOfUser(
  themeId: string | string[] | undefined,
  memberId: number | undefined
) {
  const response = await httpClient.get<IMemberRating>(
    `/api/theme/${themeId}/member/${memberId}`
  );
  return response.data;
}

export async function fetchThemeById(id: string | string[] | undefined) {
  const response = await httpClient.get<IThemeDetail>(`/api/theme/${id}`);
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
