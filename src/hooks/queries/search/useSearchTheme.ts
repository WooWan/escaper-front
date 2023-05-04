import { useQuery } from '@tanstack/react-query'
import { getThemeListByParamApi } from '@/src/api/themes'
import { escapeThemeSearchKey } from '@/src/hooks/queries/search/queries'

export const useEscapeThemeBySearch = (param: string) => {
  return useQuery({
    queryKey: escapeThemeSearchKey.detail(param),
    queryFn: () => getThemeListByParamApi(param),
  })
}
