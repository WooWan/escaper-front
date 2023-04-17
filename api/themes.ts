import { httpClient } from '@/service/httpClient'
import { ThemeDetail } from '@/types/theme'
import { ReviewResponse } from '@/types/review'

export const getThemeListApi = async (): Promise<ThemeDetail[]> => {
  const response = await httpClient.get('/themes')
  return response.data
}

export const getThemeListByParamApi = async (param: string): Promise<ThemeDetail[]> => {
  const response = await httpClient.get(`/themes/search?search=${param}`)
  return response.data
}

export const getUserRatedThemes = async (userId: string): Promise<ReviewResponse[]> => {
  const response = await httpClient.get(`/themes/user/?userId=${userId}`)
  return response.data
}
