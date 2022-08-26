import styled from "styled-components";
import { IReview } from "../../interfaces";
import IconButton from "../core/button/icon-button/IconButton";
import { Rating } from "../core/rating-bar/rating";
import ThumbUp from "../icons/thumb-up";

const ReviewList = styled.li`
  border-bottom: 1px solid rgb(238, 238, 238);
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Article = styled.article`
  padding: 1.5rem 0;
`;
const Footer = styled.footer`
  display: flex;
  align-items: center;
`;

function Review({ content, likes, rate }: IReview) {
  return (
    <ReviewList>
      <Header>
        <Rating ratingValue={rate ? rate : 0} size={30} />
        <div>user</div>
      </Header>
      <Article>{content}</Article>
      <Footer>
        <IconButton Icon={ThumbUp} />
      </Footer>
    </ReviewList>
  );
}

export default Review;
