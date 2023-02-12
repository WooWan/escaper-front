import styled from 'styled-components'
import { IReview } from '@/types'
import Font from '@/components/core/font/Font'
import { Rating } from '@/components/core/rating-bar/rating'

import { Container, Header, Article, Footer } from './Review.style'
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

function Review({ content, likes, rate, themeName, memberResponse }: IReview) {
  const { username } = memberResponse

  return (
    <Container>
      <Header>
        <RatingWrapper>
          <Font fontType="content">{themeName}</Font>
          <RatingBox>
            <Rating ratingValue={rate ? rate * 20 : 0} size={30} readonly />
            <Font fontType="content">{rate?.toFixed(1)}</Font>
          </RatingBox>
        </RatingWrapper>
        <Font fontType="subtitle">{username}</Font>
      </Header>
      <Article>{content}</Article>
      <Footer>
        {/* <ThumbUpWrapper>
          <ThumbUp />
          <span>{likes}</span>
        </ThumbUpWrapper> */}
      </Footer>
    </Container>
  )
}

export default Review
