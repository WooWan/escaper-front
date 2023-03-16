import styled from 'styled-components'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import useValidateUser from '@/utils/useValidateUser'
import { openModal } from '@/store/slices/Modal'
import { useAddReview } from '@/hooks/queries/review/useThemeReview'
import Button from '../ui/button/Button'
import { useSession } from 'next-auth/react'

const CommentTextArea = styled.textarea`
  padding: 1rem 1rem 1.5rem;
  width: 100%;
  margin-bottom: 1.25rem;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
function ReviewRegister() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { validateUser } = useValidateUser()
  const themeId = router.query.id
  const { data: session } = useSession()
  const userId = session?.user.id
  // const { user, isLogin } = useSelector(selectUser)

  const [review, setReview] = useState('')
  const { mutate: addReview } = useAddReview(String(themeId))

  const onReviewHandle = () => {
    if (!session) {
      dispatch(
        openModal({
          modalType: 'LoginModal',
          isOpen: true,
        })
      )
    } else {
      addReview({
        escapeThemeId: String(themeId),
        userId: String(userId),
        review: review,
      })
      setReview('')
    }
  }

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value)
  }
  return (
    <>
      <CommentTextArea
        className="h-auto rounded-md border-2"
        name=""
        value={review}
        id=""
        placeholder="방탈출에 대한 내 평가를 남겨보세요!"
        onChange={handleReviewChange}
        onClick={validateUser}
      />
      <ButtonWrapper>
        <Button intent="primary" size="small" onClick={onReviewHandle}>
          리뷰 작성
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default ReviewRegister
