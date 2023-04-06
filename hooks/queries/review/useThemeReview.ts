import { fetchReviewByUser, updateReview } from '@/api/review'
import { reviewKeys } from './queries'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getReviewsApi } from '@/api/review'
import { ReviewRequest } from '@/types/review'

export const useReviewsByEscapeTheme = (
  themeId: string,
  userId?: string,
  status?: 'authenticated' | 'loading' | 'unauthenticated'
) => {
  return useQuery({
    queryKey: reviewKeys.detail(themeId),
    queryFn: () => getReviewsApi(themeId, userId),
    enabled: status !== 'loading',
  })
}

export const useEscapeThemeReview = (userId: string, themeId: string) => {
  return useQuery({
    queryKey: reviewKeys.detailByUser(userId, themeId),
    queryFn: () => fetchReviewByUser(userId, themeId),
  })
}

export const useUpsertReview = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (updateReviewRequest: ReviewRequest) => updateReview(updateReviewRequest),
    onSuccess: ({ escapeThemeId }) => {
      queryClient.invalidateQueries(reviewKeys.detail(escapeThemeId))
    },
  })
}

export const useCafeReviews = (cafeId: string) => {
  return useQuery({
    queryKey: reviewKeys.detail(cafeId),
    queryFn: () => getReviewsApi(cafeId),
  })
}
