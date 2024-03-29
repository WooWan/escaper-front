import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ICommentResponse } from '@/src/types'
import { selectUser } from '@/src/store/slices/user/user'
import { useDeleteComment } from '@/src/utils/comment'
import { Button, ButtonContainer, Container, Header } from './Comment.style'
import { themedPalette } from '@/styles/theme'
import Font from '@/src/components/core/font/Font'
import CommentRegister from '@/src/components/comment/register/Register'

function Comment({ memberResponse, content, createdDate, id }: ICommentResponse) {
  const { user } = useSelector(selectUser)
  const userId = user?.id
  const commentUserId = memberResponse.id
  const { username } = memberResponse
  const [isEdited, setIsEdited] = useState(false)
  const router = useRouter()
  const postId = router.query.id
  const { mutate: deleteComment } = useDeleteComment(postId)
  const handleEditComment = () => {
    setIsEdited((prev) => !prev)
  }
  const handleDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <Container>
      {isEdited ? (
        <CommentRegister commentId={id} postId={postId} content={content} handleEditComment={handleEditComment} />
      ) : (
        <>
          <Header>
            <div>
              <Font fontType="content">{username}</Font>
              <Font fontType="content" fontSize="0.875rem" color={themedPalette.gray1}>
                {new Date(createdDate).toLocaleTimeString()}
              </Font>
            </div>
            {userId === commentUserId ? (
              <ButtonContainer>
                <Button onClick={handleEditComment}>수정</Button>
                <Button onClick={handleDeleteComment}>삭제</Button>
              </ButtonContainer>
            ) : null}
          </Header>
          <Font fontType="content">{content}</Font>
        </>
      )}
    </Container>
  )
}

export default Comment
