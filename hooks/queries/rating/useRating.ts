import { fetchRating, updateRating } from './../../../api/rating'
import { ratingKeys } from './queries'
import { reviewKeys } from './../review/queries'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addRating } from '@/api/rating'

export const useRating = (memberId: string, themeId: string) => {
  return useQuery({
    queryKey: ratingKeys.detail(memberId, themeId),
    queryFn: () => fetchRating(memberId, themeId),
  })
}

type RateRequest = {
  escapeThemeId: string
  userId: string
  rating: number
}

export const useCreateRating = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ escapeThemeId, userId, rating }: RateRequest) => addRating(escapeThemeId, userId, rating),
    onSuccess: ({ escapeThemeId, userId }) => {
      queryClient.invalidateQueries(ratingKeys.detail(userId, escapeThemeId))
    },
  })
}

export const useUpdateRating = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ escapeThemeId, userId, rating }: RateRequest) => updateRating(escapeThemeId, userId, rating),
    onSuccess: ({ escapeThemeId, userId }) => queryClient.invalidateQueries(ratingKeys.detail(userId, escapeThemeId)),
  })
}
