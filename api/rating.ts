import { httpClient } from '@/service/httpClient'
import { Rating } from '@/types/review'

export const addRating = async (escapeThemeId: string, memberId: string, rating: number) => {
  const response = await httpClient.post('/rating', {
    rating,
    escapeThemeId,
    memberId,
  })
  return response.data
}

export const updateRating = async (themeId: string, memberId: string, rating: number) => {
  const response = await httpClient.put('/rating', {
    rating,
    themeId,
    memberId,
  })
  return response.data
}

export const fetchRating = async (memberId: string, themeId: string): Promise<Rating> => {
  const response = await httpClient.get('/rating', {
    params: {
      memberId,
      themeId,
    },
  })
  return response.data
}
