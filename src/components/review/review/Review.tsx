import { MoreVertical } from 'lucide-react'
import { Header } from './Review.style'
import { ReviewResponse } from '@/src/types/review'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown/DropdownMenu'
import { useRemoveReview } from '@/src/hooks/queries/review/useThemeReview'
import { Rating } from '@/src/components/ui/rating/Rating'

const ZERO = 0

type Props = {
  review?: ReviewResponse
  userId?: string
  openReviewEdit?: () => void
}
function Review({ review, userId, openReviewEdit }: Props) {
  const removeReview = useRemoveReview()
  const handleDeleteReview = () => {
    if (!review) return
    removeReview.mutate(review?.id)
  }

  if (!review) return null

  return (
    <section className="flex flex-col gap-y-3 border-b-[1px] px-2 py-6 ">
      <Header>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <Rating
              SVGstyle={{ display: 'inline-block' }}
              initialValue={review.rating ? review.rating : 0}
              size={30}
              readonly
            />
            <span className="text-s3">{review.rating ? review.rating?.toFixed(1) : ZERO.toFixed(1)}</span>
            <label className="rounded-md bg-purple-200 px-[4px] py-[1px] text-s1 text-main500">나의 평가</label>
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <span className="text-s3">{review.user?.name}</span>
          {review.userId === userId && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVertical size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={openReviewEdit}>수정하기</DropdownMenuItem>
                <DropdownMenuItem onClick={handleDeleteReview}>삭제하기</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </Header>
      <article>{review?.review}</article>
    </section>
  )
}

export default Review
