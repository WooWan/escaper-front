import { ReviewType } from '@/types'
import Review from '@/components/review/review/Review'
import { ReviewResponse } from '@/types/review'

type Props = {
  reviews?: ReviewResponse[]
  userReview?: ReviewResponse
}

function Reviews({ reviews, userReview }: Props) {
  return (
    <ul className="mt-4 flex w-full flex-col border-t-[1px]">
      <Review review={userReview} />
      {reviews?.map((review) => {
        return <Review key={review.id} review={review} />
      })}
    </ul>
  )
}

export default Reviews
