import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { httpClient } from '@/src/service/httpClient'

const OFFSET = 0

export const fetchPostsInfinite = async ({ pageParam = OFFSET }) => {
  const response = await httpClient.get(`/posts?page=${pageParam}&size=10`)
  return response.data
}

async function deletePost(id: string | string[] | undefined) {
  await httpClient.delete(`/post/${id}`)
}

export const useDeletePost = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation(deletePost, {
    onSuccess: () => {
      router.push('/')
      return queryClient.invalidateQueries(['posts'])
    },
  })
}
