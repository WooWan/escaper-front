import { ICafe } from '@/types'
import { httpClient } from '@/service/httpClient'

export async function fetchCafeList() {
  const response = await httpClient.get<ICafe[]>('/api/cafes')
  return response.data
}

export async function fetchCafeById(id: string | string[] | undefined) {
  const response = await httpClient.get(`/api/cafe/${id}`)
  return response.data
}
