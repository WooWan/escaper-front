import { httpClient } from '@/src/service/httpClient'
import { IMember } from '@/src/types/member'
import { ApiResponse } from '@/src/types/apiResponse'

export const loginMember = async (): Promise<ApiResponse<IMember>> => {
  const response = await httpClient.get('/api/member')
  return response.data
}
