import { ThemeDetail } from '@/types/theme'
import { httpClient } from '@/service/httpClient'

export async function fetchThemeList(): Promise<ThemeDetail[]> {
  const response = await httpClient.get('/themes')
  return response.data
}

export async function fetchThemeById(id: string): Promise<ThemeDetail> {
  const response = await httpClient.get(`/theme/${id}`)
  return response.data
}

export async function fetchPopularTheme() {
  const response = await httpClient.get('/themes/popular')
  return response.data
}

export async function fetchThemeByGenre(genre: string) {
  const response = await httpClient.get(`/themes/${genre}`)
  return response.data
}

export async function fetchThemeTypes() {
  const response = await httpClient.get(`/themes/type`)
  return response.data
}
