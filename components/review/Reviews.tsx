import styled from 'styled-components'
import { ReviewType } from '@/types'
import Review from '@/components/review/review/Review'

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
`

type Props = {
  reviews?: ReviewType[]
}

function Reviews({ reviews }: Props) {
  return (
    <Container className="w-full">
      {reviews?.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </Container>
  )
}

export default Reviews
