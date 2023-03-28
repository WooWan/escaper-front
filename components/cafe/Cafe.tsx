import styled from 'styled-components'
import ThemeBox from '@/components/theme/theme-box/ThemeBox'
import { CafeType } from '@/types/theme'
import { useMemo } from 'react'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 3rem;
`

interface IProps {
  cafe: CafeType
}

export const sidebarColumn = {
  홈: '홈',
  방탈출: '방탈출',
  리뷰: '리뷰',
} as const
export type SidebarColumnTypes = (typeof sidebarColumn)[keyof typeof sidebarColumn]

function Cafe({ cafe }: IProps) {
  const { name, themeList } = cafe

  const averageRating = useMemo(
    () => themeList.map((theme) => theme.rating).reduce((acc, cur) => acc + cur, 0) / themeList.length,
    [themeList]
  )

  console.log(averageRating)

  return (
    <div>
      <header className="border-b-[1px] py-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-h1">{name}</h3>
            <span className="text-gray-400">{cafe.phoneNumber}</span>
          </div>
          <span>{name}의 테마를 즐겨보세요!</span>
        </div>
        {/* <Info>
          <RatingContent>
            <Rating size={20} ratingValue={averageRate ? averageRate * 20 : 0} readonly transition />
            <span>({averageRate.toFixed(2)})</span>
          </RatingContent>
        </Info> */}
      </header>
      <Main id={sidebarColumn['방탈출']} style={{ scrollBehavior: 'smooth' }}>
        <ul className="grid grid-cols-4 gap-4">
          {themeList.map((theme) => (
            <ThemeBox key={theme.id} {...theme} />
          ))}
        </ul>
      </Main>
    </div>
  )
}

export default Cafe
