import { useRouter } from 'next/router'
import { IPostUpdateRequest } from '@/src/types/post'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { IOption, ISearch } from '@/src/types/post'
import { httpClient } from '@/src/service/httpClient'

const makeURL = (resource: string, param: string, condition?: string) => {
  return condition === '' ? `/${resource}/search` : `/${resource}/search?${param}=${condition}`
}

export const fetchCityList = async () => {
  const response = await httpClient.get('/cities/search')
  return await response.data
}

export const fetchAreaList = async (city?: string) => {
  const url = makeURL('areas', 'city', city)
  const response = await httpClient.get(url)
  return response.data
}

export const fetchCafeList = async (area?: string) => {
  const url = makeURL('cafes', 'area', area)
  const response = await httpClient.get(url)
  return response.data
}

export const fetchThemeList = async (cafe?: string) => {
  const url = makeURL('themes', 'cafe', cafe)
  const response = await httpClient.get(url)
  return response.data
}

async function addPost({ ...post }) {
  const id = await httpClient.post('/post', post)
  return id
}

export function useAddPost() {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation(addPost, {
    onSuccess: ({ data }) => {
      router.push(`/post/${data}`)
      return queryClient.invalidateQueries(['posts'])
    },
    onError: (error) => {
      // console.error(error);
    },
  })
}

async function editPost(updateRequest: IPostUpdateRequest) {
  const { postId, ...content } = updateRequest
  return await httpClient.put('/api/post', content, { params: { postId } })
}

export function useEditPost(postId: string | string[] | undefined) {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation(editPost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['post', postId])
      router.push(`/post/${postId}`)
    },
  })
}

function convertFromStringToOption(data: string[]): IOption[] {
  return data.map((item) => ({
    label: item.toString(),
    value: item.toString(),
  }))
}
function convertFromObjectToOption(data: ISearch[]): IOption[] {
  return data.map((item) => ({
    label: item.name,
    value: item.name,
  }))
}

export function useSearchCity() {
  return useQuery<string[], unknown, IOption[]>(['cityList'], () => fetchCityList(), {
    select: (data) => convertFromStringToOption(data),
  })
}

export function useSearchArea(city?: string) {
  return useQuery<string[], unknown, IOption[]>(['areaList', city], () => fetchAreaList(city), {
    select: (data) => convertFromStringToOption(data),
  })
}

export function useSearchCafe(area?: string) {
  return useQuery<ISearch[], unknown, IOption[]>(['cafeList', area], () => fetchCafeList(area), {
    select: (data) => convertFromObjectToOption(data),
  })
}

export function useSearchTheme(cafe?: string) {
  return useQuery<ISearch[], unknown, IOption[]>(['themeList', cafe], () => fetchThemeList(cafe), {
    select: (data) => convertFromObjectToOption(data),
  })
}
