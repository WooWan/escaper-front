import { reviewKeys } from './queries'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addReviewApi, getReviewApi as getReviewsApi } from '@/api/review'

export const useReviews = (themeId: string) => {
  return useQuery({
    queryKey: reviewKeys.detail(themeId),
    queryFn: () => getReviewsApi(themeId),
  })
}

export const useAddReview = (themeId: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: any) => addReviewApi(props),
    onSuccess: () => {
      queryClient.invalidateQueries(reviewKeys.detail(themeId))
    },
  })
}
