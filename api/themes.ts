import { httpClient } from '@/service/httpClient'
import { ThemeDetail } from '@/types/theme'

export const getThemeListApi = async (): Promise<ThemeDetail[]> => {
  const response = await httpClient.get('/themes')
  return response.data
}
