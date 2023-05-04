import { useSession } from 'next-auth/react'
import { useEscapeThemeReview, useUpsertReview } from '@/src/hooks/queries/review/useThemeReview'
import { Rating } from '@/src/components/ui/rating/Rating'

type Props = {
  id?: string
  averageRating?: number
  count: number
  ratingCounts?: number
}

function RatingSection({ id, count, averageRating, ratingCounts }: Props) {
  const { data: session, status } = useSession()
  const userId = session?.user.id
  const { data } = useEscapeThemeReview(String(userId), String(id), status)
  const { mutate: updateReview } = useUpsertReview()
  const memberRating = data?.rating

  const handleRate = (rating: number) => {
    const updatedReview = {
      escapeThemeId: String(id),
      userId: String(userId),
      rating: rating,
    }
    updateReview(updatedReview)
  }

  return (
    <div className="flex gap-4  sm:gap-20">
      <div className="relative inline-flex h-32 flex-col items-center">
        <h4 className="self-start text-b2">나의 별점</h4>
        <span className="text-center text-h2">{memberRating ? memberRating : 0.0}</span>
        <Rating
          SVGstyle={{ display: 'inline-block' }}
          SVGclassName="w-7 h-7 sm:w-9 sm:h-9"
          allowFraction
          onClick={handleRate}
          initialValue={memberRating}
        />
      </div>
      <div className="relative inline-flex h-32 flex-col items-center">
        <h4 className="self-start text-b2">평균 별점</h4>
        <span className="text-center text-h2">{averageRating}</span>
        <Rating
          SVGstyle={{ display: 'inline-block' }}
          SVGclassName="w-7 h-7 sm:w-9 sm:h-9"
          allowFraction
          initialValue={averageRating}
          readonly
        />
      </div>
    </div>
  )
}

export default RatingSection
