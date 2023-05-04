import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeDetail } from '@/src/types/theme'
import { Description, ToggleButton } from './Theme.style'
import { useCustomMediaQuery } from '@/src/hooks/useCustomMediaQuery'
import RatingSection from '@/src/components/ratings/rating-section'

type Props = {
  theme: ThemeDetail
}

function ThemeInfo({ theme }: Props) {
  const { id, name, description, timeLimitation, cost, imageURL, cafeId, cafe, reviewList } = { ...theme }
  const ratingCounts = reviewList?.filter((review) => review.rating !== null).length
  const { lg } = useCustomMediaQuery()
  const [isMore, setIsMore] = useState(false)

  const handleMoreBtn = () => {
    setIsMore((prev) => !prev)
  }

  return (
    <div className="mt-6 flex flex-col items-center px-4 sm:items-stretch">
      <section className="flex gap-x-4 sm:gap-x-8">
        <div className="h-full">
          <div className="relative h-full w-full">
            <Image src={theme?.imageURL} alt="theme" width={200} height={350} />
          </div>
        </div>
        <div className="flex min-w-[150px] flex-col gap-y-2">
          <div className="flex items-center gap-x-4">
            <span className="shrink-0 text-s2 text-gray-400">방탈출 테마</span>
            <Link href={`/theme/${id}`}>
              <span className="text-s2 sm:text-s3">{name}</span>
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="shrink-0 text-s2 text-gray-400">카페</span>
            <Link href={`/cafe/${cafeId}`}>
              <span className="text-s2 sm:text-s3">{cafe?.name}</span>
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="shrink-0 text-s2 text-gray-400">위치</span>
            <span className="text-s2 sm:text-s3">{cafe?.address}</span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="shrink-0 text-s2 text-gray-400">전화 번호</span>
            <span className="text-s1 sm:text-s3">{cafe?.phoneNumber}</span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="shrink-0 text-s2 text-gray-400">제한 시간</span>
            <span className="text-s2 sm:text-s3">{timeLimitation}분</span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="shrink-0 text-s2 text-gray-400">가격</span>
            <span className="text-s1 sm:text-s3">{cost}</span>
          </div>
          {lg && <RatingSection id={id} count={0} averageRating={theme?.rating} ratingCounts={ratingCounts} />}
        </div>
      </section>
      {!lg && <RatingSection id={id} count={0} averageRating={theme?.rating} ratingCounts={ratingCounts} />}
      <section>
        <Description isActive={isMore}>{description}</Description>
        <ToggleButton onClick={handleMoreBtn}>{/* {isMore ? "더 보기" : "접기"} */}</ToggleButton>
      </section>
    </div>
  )
}

export default ThemeInfo
