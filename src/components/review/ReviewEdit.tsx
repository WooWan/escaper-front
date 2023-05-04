import Button from '@/src/components/ui/button/Button'
import React, { useState } from 'react'
import { ReviewResponse } from '@/src/types/review'
import { useUpsertReview } from '@/src/hooks/queries/review/useThemeReview'

type Props = {
  // isReviewEditOpen: boolean
  userReview?: ReviewResponse
  themeId: string
  userId?: string
  closeReviewEdit: () => void
}

const ReviewEdit = ({ userReview, themeId, userId, closeReviewEdit }: Props) => {
  const [review, setReview] = useState(userReview?.review)
  const { mutate: updateReview } = useUpsertReview()

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value)
  }

  const onReviewHandle = () => {
    const updatedReview = {
      ...userReview,
      escapeThemeId: String(themeId),
      userId: String(userId),
      review: review,
    }
    updateReview(updatedReview)
    closeReviewEdit()
  }

  return (
    <>
      <textarea
        className="mb-1 h-auto w-full rounded-md border-2 p-3"
        name=""
        value={review}
        id=""
        placeholder="방탈출에 대한 내 평가를 남겨보세요!"
        onChange={handleReviewChange}
      />
      <div className="flex justify-end">
        <Button intent="primary" size="small" onClick={onReviewHandle}>
          리뷰 작성
        </Button>
      </div>
    </>
  )
}

export default ReviewEdit
