import { useSession } from 'next-auth/react'
import React, { ReactElement, useState } from 'react'
import SidebarLayout from '@/src/components/layout/SidebarLayout'
import { useUserRatedTheme } from '@/src/hooks/queries/escapeTheme/useEscapeTheme'
import ThemeBox from '@/src/components/theme/theme-box/ThemeBox'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useEscapeThemeLikeListByUser } from '@/src/hooks/queries/escapeTheme/likes/useAddEscapeThemeLike'

type Category = '별점' | '좋아요' | '리뷰'
export default function MyPage() {
  const { data: session } = useSession()
  const [selected, setSelected] = useState<Category>('별점')
  const userId = session?.user?.id
  const { data } = useUserRatedTheme(String(userId))
  const { data: themes } = useEscapeThemeLikeListByUser(String(userId))

  return (
    <div>
      <h3 className="pb-3 text-h1">보관함</h3>
      <ul className="mb-8 flex gap-x-4 border-b-[1px] border-gray-300 text-s4">
        <li
          onClick={() => setSelected('별점')}
          className={twMerge(
            clsx(
              'cursor-pointer border-main500 py-1 text-gray-400',
              selected === '별점' && 'text-primary border-b-4 text-main500'
            )
          )}
        >
          별점
        </li>
        <li
          onClick={() => setSelected('좋아요')}
          className={twMerge(
            clsx(
              'cursor-pointer border-main500 py-1 text-gray-400',
              selected === '좋아요' && 'text-primary border-b-4 text-main500'
            )
          )}
        >
          좋아요
        </li>
        <li
          onClick={() => setSelected('좋아요')}
          className={twMerge(
            clsx(
              'cursor-pointer border-main500 py-1 text-gray-400',
              selected === '리뷰' && 'text-primary border-b-4 text-main500'
            )
          )}
        >
          리뷰
        </li>
      </ul>
      {selected === '별점' && (
        <section className="grid grid-cols-2 flex-wrap gap-x-8 gap-y-10 px-4 lg:grid-cols-5">
          {data?.map((review) => (
            <ThemeBox key={review.id} {...review.escapeTheme} />
          ))}
        </section>
      )}

      {selected === '좋아요' && (
        <section className="grid grid-cols-2 flex-wrap gap-x-8 gap-y-10 px-4 lg:grid-cols-5">
          {themes?.map((item) => (
            <ThemeBox key={item.themeId} {...item.theme} />
          ))}
        </section>
      )}
    </div>
  )
}

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>
}
