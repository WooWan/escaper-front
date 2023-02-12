import styled from 'styled-components'
import SwitchVertical from '@/components/icons/switch-vertical'
import { IReviewResult } from '@/types'
import Review from '@/components/review/review/Review'

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`
const AlignWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0;
  min-width: 70px;
  font-weight: bolder;
  cursor: pointer;
  span {
    flex: 3 1 20px;
    font-size: 0.75rem;
  }
  svg {
    flex: 1 1 10px;
  }
`

interface IProps {
  reviews: IReviewResult
}

function Reviews({ reviews }: IProps) {
  const { data } = reviews
  return (
    <Container>
      <Header>
        <span>리뷰 ({data.length})</span>
        <AlignWrapper>
          <span>좋아요 순</span>
          <SwitchVertical />
        </AlignWrapper>
      </Header>
      {data?.map((review) => (
        <Review key={review.reviewId} {...review} />
      ))}
    </Container>
  )
}

export default Reviews
