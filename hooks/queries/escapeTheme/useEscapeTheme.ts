import { useQuery } from '@tanstack/react-query'
import { escapeThemeKey } from './queries'
import { getThemeListApi, getUserRatedThemes } from '@/api/themes'

export const useEscapeThemeList = () => {
  return useQuery({
    queryKey: escapeThemeKey.all,
    queryFn: getThemeListApi,
  })
}

export const useUserRatedTheme = (userId: string) => {
  return useQuery({
    queryKey: escapeThemeKey.all,
    queryFn: () => getUserRatedThemes(userId),
    enabled: userId !== 'undefined',
  })
}
