import styled from "styled-components";
import { IReview } from "../../../interfaces";
import { SubtitleFont } from "../../core/font/TitleFonts";
import { Rating } from "../../core/rating-bar/rating";
import ThumbUp from "../../icons/thumb-up";
import {
  Container,
  Header,
  Article,
  Footer,
  ThumbUpWrapper,
} from "./Review.style";

function Review({ content, likes, rate, memberResponse }: IReview) {
  const { username } = memberResponse;
  return (
    <Container>
      <Header>
        <Rating ratingValue={rate ? rate : 0} size={30} />
        <SubtitleFont>{username}</SubtitleFont>
      </Header>
      <Article>{content}</Article>
      <Footer>
        <ThumbUpWrapper>
          <ThumbUp />
          <span>{likes}</span>
        </ThumbUpWrapper>
      </Footer>
    </Container>
  );
}

export default Review;
