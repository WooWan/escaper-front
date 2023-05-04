import Review from '@/src/components/review/review/Review'
import { ReviewResponse } from '@/src/types/review'

type Props = {
  openReviewEdit: () => void
  reviews?: ReviewResponse[]
  userReview?: ReviewResponse
  userId?: string
}

function Reviews({ reviews, userReview, userId, openReviewEdit }: Props) {
  return (
    <ul className="mt-4 flex w-full flex-col border-t-[1px]">
      <Review review={userReview} userId={userId} openReviewEdit={openReviewEdit} />
      {reviews?.map((review) => {
        return <Review key={review.id} review={review} />
      })}
    </ul>
  )
}

export default Reviews
