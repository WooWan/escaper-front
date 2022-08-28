import {
  IThemeDetail,
  IMemberRating as IMemberRating,
} from "../interfaces/theme";
import { httpClient } from "../utils/httpClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ITheme } from "../interfaces";

export async function fetchThemeList() {
  const response = await httpClient.get<ITheme[]>("api/themes");
  return response.data;
}

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
  return response.data;
}

export async function fetchPopularTheme() {
  const response = await httpClient.get("/api/themes/popular");
  return response.data;
}

export async function fetchThemeByGenre(genre: string) {
  const response = await httpClient.get(`/api/themes/${genre}`);
  return response.data;
}

export async function fetchThemeTypes() {
  const response = await httpClient.get(`/api/themes/type`);
  return response.data;
}
interface IReviewRequest {
  themeId: string | string[] | undefined;
  memberId: number | undefined;
  review: string;
}

export const fetchReview = async (themeId: string | string[] | undefined) => {
  const response = await httpClient.get(`/api/review/${Number(themeId)}`);
  return response.data;
};

export async function addReview({ themeId, memberId, review }: IReviewRequest) {
  return await httpClient.post(`/api/review/${themeId}/member/${memberId}`, {
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
