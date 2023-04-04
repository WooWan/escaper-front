import { httpClient } from '@/service/httpClient'
import { LikeResponse } from '@/types/like'

export const addEscapeThemeLike = async (escapeThemeId: string, userId: string) => {
  const response = await httpClient.post(`/theme/like`, {
    escapeThemeId,
    userId,
  })
  return response.data
}

export const fetchEscapeThemeLikeList = async (escapeThemeId: string): Promise<LikeResponse[]> => {
  const response = await httpClient.get(`/theme/like/?escapeThemeId=${escapeThemeId}`)
  return response.data
}
