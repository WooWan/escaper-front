import {httpClient} from "./httpClient";

export async function fetchThemeById(id: string) {
  const response = await httpClient.get(`/api/theme/${id}`);
  return await response.data;
}

export async function fetchPopularTheme() {
  const response = await httpClient.get("/api/themes/popular")
  return await response.data;
}

export async function fetchThemeByGenre(genre: string) {
  const response = await httpClient.get(`/api/themes/${genre}`)
  return await response.data;
}

export async function fetchThemeTypes() {
  const response = await httpClient.get(`/api/themes/type`)
  return await response.data;
}