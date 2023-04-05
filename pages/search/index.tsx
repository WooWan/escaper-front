import { useEscapeThemeBySearch } from '@/hooks/queries/search/useSearchTheme'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import SidebarLayout from '@/components/layout/SidebarLayout'
import ThemeBox from '@/components/theme/theme-box/ThemeBox'

const SearchPage = () => {
  const router = useRouter()
  const { q } = router.query
  const { data: result } = useEscapeThemeBySearch(String(q))

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 px-10 lg:grid-cols-3 xl:grid-cols-5">
      {result?.map((theme) => {
        return <ThemeBox key={theme.id} {...theme} />
      })}
    </div>
  )
}

export default SearchPage

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>
}
