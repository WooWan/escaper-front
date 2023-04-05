import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addEscapeThemeLike, fetchEscapeThemeLikeList, fetchEscapeThemeLikeListByUser } from '@/api/theme/like'
import { escapeThemeLikeKeys } from '@/hooks/queries/escapeTheme/likes/queries'
import { LikeRequest, LikeResponse } from '@/types/like'

export const useAddEscapeThemeLike = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ escapeThemeId, userId }: LikeRequest) => addEscapeThemeLike(escapeThemeId, userId),
    onMutate: async ({ escapeThemeId, userId }) => {
      await queryClient.cancelQueries(escapeThemeLikeKeys.escapeTheme(escapeThemeId))
      const previousEscapeThemeLikeList = queryClient.getQueryData<LikeResponse[]>(
        escapeThemeLikeKeys.escapeTheme(escapeThemeId)
      )
      const updatedLikedList = [
        ...(previousEscapeThemeLikeList || []),
        {
          escapeThemeId,
          userId,
        },
      ]
      queryClient.setQueryData(escapeThemeLikeKeys.escapeTheme(escapeThemeId), updatedLikedList)
      return {
        previousEscapeThemeLikeList,
      }
    },
    onSettled: async ({ escapeThemeId }) => {
      queryClient.invalidateQueries(escapeThemeLikeKeys.escapeTheme(escapeThemeId))
    },
    onError: async ({ escapeThemeId }, variables, context) => {
      if (context?.previousEscapeThemeLikeList) {
        queryClient.setQueryData(escapeThemeLikeKeys.escapeTheme(escapeThemeId), context.previousEscapeThemeLikeList)
      }
    },
  })
}

export const useRemoveEscapeThemeLike = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ escapeThemeId, userId }: LikeRequest) => addEscapeThemeLike(escapeThemeId, userId),
    onMutate: async ({ escapeThemeId, userId }) => {
      await queryClient.cancelQueries(escapeThemeLikeKeys.escapeTheme(escapeThemeId))
      const previousEscapeThemeLikeList = queryClient.getQueryData<LikeResponse[]>(
        escapeThemeLikeKeys.escapeTheme(escapeThemeId)
      )

      if (previousEscapeThemeLikeList) {
        const removedList = previousEscapeThemeLikeList.filter((like) => like.userId !== userId)
        queryClient.setQueryData(escapeThemeLikeKeys.escapeTheme(escapeThemeId), removedList)
      }
      return {
        previousEscapeThemeLikeList,
      }
    },
    onSettled: async ({ escapeThemeId }) => {
      queryClient.invalidateQueries(escapeThemeLikeKeys.escapeTheme(escapeThemeId))
    },
    onError: async ({ escapeThemeId }, variables, context) => {
      if (context?.previousEscapeThemeLikeList) {
        queryClient.setQueryData(escapeThemeLikeKeys.escapeTheme(escapeThemeId), context.previousEscapeThemeLikeList)
      }
    },
  })
}

export const useEscapeThemeLikeCount = (escapeThemeId: string) => {
  return useQuery({
    queryFn: () => fetchEscapeThemeLikeList(escapeThemeId),
    queryKey: escapeThemeLikeKeys.escapeTheme(escapeThemeId),
  })
}

export const useEscapeThemeLikeListByUser = (userId: string) => {
  return useQuery({
    queryFn: () => fetchEscapeThemeLikeListByUser(userId),
    queryKey: escapeThemeLikeKeys.user(userId),
  })
}
