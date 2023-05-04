import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import useValidateUser from '@/src/utils/useValidateUser'
import { openModal } from '@/src/store/slices/Modal'
import { useUpsertReview } from '@/src/hooks/queries/review/useThemeReview'
import { useSession } from 'next-auth/react'
import { ReviewResponse } from '@/src/types/review'
import { Button } from '@/src/components/ui/button/Button'

type Props = {
  userReview?: ReviewResponse
}

function ReviewRegister({ userReview }: Props) {
  const router = useRouter()
  const dispatch = useDispatch()
  const { validateUser } = useValidateUser()
  const themeId = router.query.id
  const { data: session } = useSession()
  const userId = session?.user.id
  const [review, setReview] = useState(userReview?.review)
  const { mutate: updateReview } = useUpsertReview()

  const onReviewHandle = () => {
    if (!session) {
      dispatch(
        openModal({
          modalType: 'LoginModal',
          isOpen: true,
        })
      )
    } else {
      const updatedReview = {
        ...userReview,
        escapeThemeId: String(themeId),
        userId: String(userId),
        review: review,
      }
      updateReview(updatedReview)
    }
  }
  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value)
  }

  if (!userReview) {
    return (
      <>
        <textarea
          className="mb-1 h-auto w-full rounded-md border-2 p-3"
          name=""
          value={review}
          id=""
          placeholder="방탈출에 대한 내 평가를 남겨보세요!"
          onChange={handleReviewChange}
          onClick={validateUser}
        />
        <div className="flex justify-end">
          <Button variant="primary" size="sm" onClick={onReviewHandle}>
            리뷰 작성
          </Button>
        </div>
      </>
    )
  }
  return <></>
}

export default ReviewRegister
