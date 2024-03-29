import { fetchReviewByUser, removeReviewApi, updateReview } from '@/src/api/review'
import { reviewKeys } from './queries'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getReviewsApi } from '@/src/api/review'
import { ReviewRequest } from '@/src/types/review'

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

export const useEscapeThemeReview = (
  userId: string,
  themeId: string,
  status: 'authenticated' | 'loading' | 'unauthenticated'
) => {
  return useQuery({
    queryKey: reviewKeys.detailByUser(userId, themeId),
    queryFn: () => fetchReviewByUser(userId, themeId),
    enabled: status !== 'loading',
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

export const useRemoveReview = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (reviewId: string) => removeReviewApi(reviewId),
    onSuccess: ({ escapeThemeId }) => {
      queryClient.invalidateQueries(reviewKeys.detail(escapeThemeId))
    },
  })
}
