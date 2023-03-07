import { httpClient } from '@/service/httpClient'

export type ReviewRequest = {
  userId: string
  escapeThemeId: string
  review: string
}

export const addReviewApi = async (review: ReviewRequest) => {
  return httpClient.post('/review', {
    review,
  })
}

export const getReviewsApi = async (themeId: string) => {
  const response = await httpClient.get(`/review/${themeId}`)
  return response.data
}

export const getReviewsOfCafeApi = async (cafeId: string) => {
  const response = await httpClient.get(`/review/cafe/${cafeId}`)
  return response.data
}
