import styled from "styled-components";
import { IReview } from "../../../interfaces";
import { SubtitleFont, TitleFont } from "../../core/font/TitleFonts";
import { Rating } from "../../core/rating-bar/rating";

import {
  Container,
  Header,
  Article,
  Footer,
  ThumbUpWrapper,
} from "./Review.style";
export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
`;
export const RatingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

function Review({ content, likes, rate, themeName, memberResponse }: IReview) {
  const { username } = memberResponse;

  return (
    <Container>
      <Header>
        <RatingWrapper>
          <TitleFont>{themeName}</TitleFont>
          <RatingBox>
            <Rating ratingValue={rate ? rate * 20 : 0} size={30} readonly />
            <TitleFont>{rate?.toFixed(1)}</TitleFont>
          </RatingBox>
        </RatingWrapper>
        <SubtitleFont>{username}</SubtitleFont>
      </Header>
      <Article>{content}</Article>
      <Footer>
        {/* <ThumbUpWrapper>
          <ThumbUp />
          <span>{likes}</span>
        </ThumbUpWrapper> */}
      </Footer>
    </Container>
  );
}

export default Review;
