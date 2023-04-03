import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addEscapeThemeLike, fetchEscapeThemeLikeCount } from '@/api/theme/likes'
import { escapeThemeLikeKeys } from '@/hooks/queries/escapeTheme/likes/queries'

type LikeRequest = {
  escapeThemeId: string
  userId: string
}

export const useEscapeThemeLike = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ escapeThemeId, userId }: LikeRequest) => addEscapeThemeLike(escapeThemeId, userId),
    // onSuccess: ({ escapeThemeId, userId }) => {
    //   queryClient.invalidateQueries(escapeThemeLikeKeys.detail(userId, escapeThemeId))
    // },
  })
}

export const useEscapeThemeLikeCount = (escapeThemeId: string) => {
  return useQuery({
    queryKey: escapeThemeLikeKeys.detail(escapeThemeId),
    queryFn: () => fetchEscapeThemeLikeCount(escapeThemeId),
  })
}
