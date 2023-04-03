import { httpClient } from '@/service/httpClient'

export const addEscapeThemeLike = async (escapeThemeId: string, userId: string) => {
  const response = await httpClient.post(`/theme/like`, {
    escapeThemeId,
    userId,
  })
  return response.data
}

export const fetchEscapeThemeLikeCount = async (escapeThemeId: string) => {
  const response = await httpClient.get(`/theme/like/?escapeThemeId=${escapeThemeId}`)
  return response.data
}
