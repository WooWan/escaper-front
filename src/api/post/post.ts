import { IPostsPagination } from '@/src/types'
import { httpClient } from '@/src/service/httpClient'

export const fetchPosts = async () => {
  const response = await httpClient.get<IPostsPagination>('/api/posts')
  return response.data
}

export const fetchPost = async (postId: string | string[] | undefined) => {
  const response = await httpClient.get(`/api/post/${postId}`)
  return response.data
}
