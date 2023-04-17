import { useQuery } from '@tanstack/react-query'
import { escapeThemeKey } from './queries'
import { getThemeListApi, getUserRatedMovies } from '@/api/themes'

export const useEscapeThemeList = () => {
  return useQuery({
    queryKey: escapeThemeKey.all,
    queryFn: getThemeListApi,
  })
}

export const useUserRatedTheme = (userId: string) => {
  return useQuery({
    queryKey: escapeThemeKey.all,
    queryFn: () => getUserRatedMovies(userId),
    enabled: userId !== 'undefined',
  })
}
