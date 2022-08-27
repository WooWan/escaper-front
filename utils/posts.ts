import { httpClient } from "./httpClient";

const OFFSET = 0;

export const fetchPostsInfinite = async ({ pageParam = OFFSET }) => {
  const response = await httpClient.get(`/api/posts?page=${pageParam}&size=10`);
  return response.data;
};
