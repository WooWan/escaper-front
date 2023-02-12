import { httpClient } from '@/service/httpClient'
import { IMember } from '@/types/member'
import { ApiResponse } from '@/types/apiResponse'

export const loginMember = async (): Promise<ApiResponse<IMember>> => {
  const response = await httpClient.get('/api/member')
  return response.data
}
