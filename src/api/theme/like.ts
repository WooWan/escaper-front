import { httpClient } from '@/src/service/httpClient'
import { LikeResponse } from '@/src/types/like'
import { LikeEscapeThemeByUser } from '@/src/types/theme'

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

export const fetchEscapeThemeLikeListByUser = async (userId: string): Promise<LikeEscapeThemeByUser[]> => {
  const response = await httpClient.get(`/theme/like/user/?userId=${userId}`)
  return response.data
}
