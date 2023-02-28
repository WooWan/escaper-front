import { ThemeDetail } from '@/types/theme.d'
import { IThemeDetail, IMemberRating as IMemberRating } from '../types/theme'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IThemeInfo } from '../types'
import { httpClient } from '../service/httpClient'

export async function fetchThemeList() {
  const response = await httpClient.get<IThemeInfo[]>('api/themes')
  return response.data
}

export async function fetchThemeRatingOfUser(themeId: string | string[] | undefined, memberId: number | undefined) {
  const response = await httpClient.get<IMemberRating>(`/theme/${themeId}/member/${memberId}`)
  return response.data
}

export async function fetchThemeById(id: string | string[] | undefined) {
  const response = await httpClient.get<IThemeDetail>(`/theme/${id}`)
  return response.data
}

export async function fetchPopularTheme() {
  const response = await httpClient.get('/themes/popular')
  return response.data
}

export async function fetchThemeByGenre(genre: string) {
  const response = await httpClient.get(`/themes/${genre}`)
  return response.data
}

export async function fetchThemeTypes() {
  const response = await httpClient.get(`/themes/type`)
  return response.data
}
interface IReviewRequest {
  themeId: string | string[] | undefined
  memberId: number | undefined
  review: string
}

export const fetchReview = async (themeId: string | string[] | undefined) => {
  const response = await httpClient.get(`/review/${Number(themeId)}`)
  return response.data
}

export async function addReview({ themeId, memberId, review }: IReviewRequest) {
  return await httpClient.post(`/review/${themeId}/member/${memberId}`, {
    content: review,
  })
}

// export function useAddReview(themeId: string | string[] | undefined) {
//   const queryClient = useQueryClient()
//   return useMutation(addReview, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(['review', themeId])
//     },
//   })
// }

export const getThemeByIdApi = async (id: string): Promise<ThemeDetail> => {
  const response = await httpClient.get(`/theme/${id}`)
  return response.data
}
