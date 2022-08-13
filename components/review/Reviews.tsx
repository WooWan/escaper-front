import styled from "styled-components";
import Review from "./Review";
import SwitchVertical from "../icons/switch-vertical";
import {IReview} from "../../types";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
`
const Header= styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`
const AlignButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    display: block;
    font-size: 0.5rem;
  }
`

interface IProps {
  reviews?: IReview[];
}

function Reviews({reviews}: IProps) {

  return (
    <Container>
      <Header>
        <span>리뷰 ({reviews?.length})</span>
        <AlignButton>
          <span>좋아요순</span>
          <SwitchVertical/>
        </AlignButton>
      </Header>
      {
        reviews?.map(review => (
            <Review key={review.reviewId} {...review} />
          )
        )
      }
    </Container>
  );
}

export default Reviews;