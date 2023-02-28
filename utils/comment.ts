import { ICommentUpdateRequest } from '@/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { IComment, ICommentResponse } from '@/types'
import { httpClient } from '@/service/httpClient'

async function addComment(comment: IComment) {
  const content = comment.content
  return await httpClient.post(
    '/comment',
    { content },
    {
      params: { postId: comment.postId },
    }
  )
}

async function editComment({ commentId, content }: ICommentUpdateRequest) {
  return await httpClient.put(
    '/comment',
    { content },
    {
      params: { commentId },
    }
  )
}

async function fetchComments(postId: string | string[] | undefined) {
  const response = await httpClient.get('/comment', { params: { postId } })
  return response.data
}

export const useCommentData = (postId: string | string[] | undefined) => {
  return useQuery<ICommentResponse[]>(['comment', postId], () => fetchComments(postId))
}

export function useAddComment(postId: string | string[] | undefined) {
  const queryClient = useQueryClient()
  return useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comment', postId])
    },
  })
}

export function useUpdateComment(postId: string | string[] | undefined) {
  const queryClient = useQueryClient()
  return useMutation(editComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comment', postId])
    },
  })
}

async function deleteComment(commentId: number) {
  await httpClient.delete('/api/comment', {
    params: {
      commentId,
    },
  })
}

export function useDeleteComment(postId: string | string[] | undefined) {
  const queryClient = useQueryClient()
  return useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comment', postId])
    },
  })
}
