import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { IPost } from '@/src/types'
import { selectUser } from '@/src/store/slices/user/user'
import { useDeletePost } from '@/utils/posts'
import { Button } from '@/src/components/comment/comment/Comment.style'
import Font from '@/src/components/core/font/Font'
import { StarIcon } from '@/src/components/core/rating-bar/star-icon'
import {
  ButtonWrapper,
  Container,
  Header,
  InfoSection,
  InfoWrapper,
  PostWrapper,
  StarWrapper,
  ThemeRating,
  ThemeWrapper,
} from './Post.style'

interface IProps {
  data: IPost
}
function Post({ data }: IProps) {
  const router = useRouter()
  const { id } = router.query
  const { user } = useSelector(selectUser)
  const { memberResponse, title, content, themeResponse, appointmentDate, participation } = data
  const { cafeResponse } = themeResponse
  const { mutate: deletePost } = useDeletePost(id)

  const userId = user?.id
  const postMemberId = memberResponse?.id

  const handleEdit = () => {
    router.push({ pathname: '/post/register', query: { data: JSON.stringify(data) } }, `/post/register`)
  }
  const handleDeletePost = () => {
    deletePost(id)
  }
  return (
    <Container>
      <Font fontType="title">{title}</Font>
      <Header>
        <Font fontType="content">{/*{username} | {new Date(createdDate).toLocaleDateString()}*/}</Font>
        {userId === postMemberId ? (
          <ButtonWrapper>
            <Button onClick={handleEdit}>수정</Button>
            <Button onClick={handleDeletePost}>삭제</Button>
          </ButtonWrapper>
        ) : null}
      </Header>
      <InfoSection>
        <ThemeWrapper>
          <Image src={themeResponse?.imageURL} width={230} height={300} alt="escape cafe theme" />
          <Font fontType="subtitle">
            <Link href={`/cafe/${cafeResponse.id}`}>{cafeResponse?.name}</Link>
          </Font>
          <ThemeRating>
            <Link href={`/theme/${themeResponse.themeId}`}>
              <a>
                <Font fontType="subtitle">{themeResponse?.name}</Font>
              </a>
            </Link>
            <StarWrapper>
              <StarIcon style={{ color: '#ffbc0b' }} />
              <Font fontType="content">({themeResponse?.rating.toFixed(1)})</Font>
            </StarWrapper>
          </ThemeRating>
        </ThemeWrapper>
        <PostWrapper>
          <InfoWrapper>
            <Font fontType="subtitle" color="gray">
              카페
            </Font>
            <Link href={`/cafe/${cafeResponse.id}`}>
              <Font fontType="subtitle">{cafeResponse?.name}</Font>
            </Link>
          </InfoWrapper>
          <InfoWrapper>
            <Font fontType="subtitle" color="gray">
              방탈출 테마
            </Font>
            <Link href={`/theme/${themeResponse.themeId}`}>
              <Font fontType="subtitle">{themeResponse?.name}</Font>
            </Link>
          </InfoWrapper>
          <InfoWrapper>
            <Font fontType="subtitle" color="gray">
              모집 인원
            </Font>
            <Font fontType="subtitle">{participation}</Font>
          </InfoWrapper>
          <InfoWrapper>
            <Font fontType="subtitle" color="gray">
              방탈출 예정일
            </Font>
            <Font fontType="subtitle">{appointmentDate}</Font>
          </InfoWrapper>
        </PostWrapper>
      </InfoSection>
      <Font fontType="content">{content}</Font>
    </Container>
  )
}

export default Post
