import { ICafe } from '@/types'
import { httpClient } from '@/service/httpClient'

export async function fetchCafeList() {
  const response = await httpClient.get<ICafe[]>('/cafes')
  return response.data
}

export async function fetchCafeById(id: string | string[] | undefined) {
  const response = await httpClient.get(`/cafe/${id}`)
  return response.data
}
