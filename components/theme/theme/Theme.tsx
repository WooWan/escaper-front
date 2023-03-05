import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeDetail } from '@/types/theme'
import { MainInfo, ThemeAbout, Description, ToggleButton } from './Theme.style'
import { Rating } from 'react-simple-star-rating'
import { useRouter } from 'next/router'
import { useCreateRating, useRating, useUpdateRating } from '@/hooks/queries/rating/useRating'
import { useSession } from 'next-auth/react'

type Props = {
  theme?: ThemeDetail
}

function ThemeInfo({ theme }: Props) {
  const router = useRouter()
  const { mutate: createRating } = useCreateRating()
  const { mutate: updateRating } = useUpdateRating()
  const { id, name, description, timeLimitation, cost, imageURL, cafeId, cafe } = { ...theme }
  const [isMore, setIsMore] = useState(false)
  const { data: session } = useSession()
  const userId = session?.user.id
  const { data } = useRating(String(userId), String(id))

  const handleMoreBtn = () => {
    setIsMore((prev) => !prev)
  }

  const handleRate = (rating: number) => {
    if (data) {
      updateRating({
        escapeThemeId: String(theme?.id),
        userId: String(userId),
        rating,
      })
    } else {
      createRating({
        escapeThemeId: String(theme?.id),
        userId: String(userId),
        rating,
      })
    }
  }

  return (
    <div className="mt-12">
      <MainInfo>
        <div>
          <Image src={'/images/escape.jpeg'} alt="theme" width={200} height={350} />
          <div className="flex flex-col">
            <Link href={`/theme/${id}`}>
              <span className="text-h1">{name}</span>
            </Link>
            <Link href={`/cafe/${cafeId}`}>{/* <span>{cafe.name}</span> */}</Link>
          </div>
        </div>
        <ThemeAbout>
          <div className="flex items-center gap-x-4">
            <span className="text-s2 text-gray-400">위치</span>
            <span className="text-s3">{cafe?.address}</span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="text-s2 text-gray-400">전화 번호</span>
            <span className="text-s3">{cafe?.phoneNumber}</span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="text-s2 text-gray-400">제한 시간</span>
            <span className="text-s3">{timeLimitation}분</span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="text-s2 text-gray-400">가격</span>
            <span className="text-s3">{cost}</span>
          </div>
          <div className="flex gap-20">
            <div className="relative inline-flex h-32 flex-col  items-center">
              <h4 className="self-start text-b2">나의 별점</h4>
              <span className="text-center text-h2">{data?.rating}</span>
              <Rating SVGstyle={{ display: 'inline-block' }} onClick={handleRate} initialValue={data?.rating} />
            </div>
            <div className="relative inline-flex h-32 flex-col  items-center">
              <h4 className="self-start text-b2">평균 별점</h4>
              <span className="text-center text-h2">{theme?.rating}</span>
              <Rating SVGstyle={{ display: 'inline-block' }} initialValue={theme?.rating} readonly />
            </div>
          </div>
        </ThemeAbout>
      </MainInfo>
      <section>
        <Description isActive={isMore}>{description}</Description>
        <ToggleButton onClick={handleMoreBtn}>{/* {isMore ? "더 보기" : "접기"} */}</ToggleButton>
      </section>
    </div>
  )
}

export default ThemeInfo
