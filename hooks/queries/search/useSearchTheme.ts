import { useQuery } from '@tanstack/react-query'
import { getThemeListByParamApi } from '@/api/themes'
import { escapeThemeSearchKey } from '@/hooks/queries/search/queries'

export const useEscapeThemeBySearch = (param: string) => {
  return useQuery({
    queryKey: escapeThemeSearchKey.detail(param),
    queryFn: () => getThemeListByParamApi(param),
  })
}
