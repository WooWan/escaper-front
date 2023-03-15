import styled from 'styled-components'
import { ReviewType } from '@/types'
import { MoreVertical } from 'lucide-react'
import { Container, Header, Article } from './Review.style'
import { Rating } from 'react-simple-star-rating'

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
`
export const RatingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`

const ZERO = 0
function Review({ review, likeCount, rating, user }: ReviewType) {
  const { name } = user

  return (
    <Container>
      <Header>
        <RatingWrapper>
          <RatingBox>
            <Rating SVGstyle={{ display: 'inline-block' }} initialValue={rating ? rating : 0} size={30} readonly />
            <span className="text-s3">{rating ? rating?.toFixed(1) : ZERO.toFixed(1)}</span>
          </RatingBox>
        </RatingWrapper>
        <div className="flex items-center">
          <span className="text-s3">{name}</span>
          <MoreVertical size={16} />
        </div>
      </Header>
      <Article>{review}</Article>
    </Container>
  )
}

export default Review
