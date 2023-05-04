import { httpClient } from '@/src/service/httpClient'
import { ReviewRequest, ReviewResponse } from '@/src/types/review'

export const updateReview = async (review: ReviewRequest) => {
  const response = await httpClient.put('/review', {
    review,
  })
  return response.data
}

export const getReviewsApi = async (themeId: string, userId?: string): Promise<ReviewResponse[]> => {
  const response = await httpClient.get(`/reviews`, {
    params: {
      themeId: themeId,
      userId: userId,
    },
  })
  return response.data
}

export const removeReviewApi = async (reviewId: string) => {
  const response = await httpClient.delete(`/review/${reviewId}`)
  return response.data
}

export const getReviewsOfCafeApi = async (cafeId: string) => {
  const response = await httpClient.get(`/review/cafe/${cafeId}`)
  return response.data
}

export const fetchReviewByUser = async (memberId: string, themeId: string): Promise<ReviewResponse> => {
  const response = await httpClient.get('/rating', {
    params: {
      memberId,
      themeId,
    },
  })
  return response.data
}
