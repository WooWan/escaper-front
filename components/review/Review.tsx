import {Rating} from "react-simple-star-rating";
import styled from "styled-components";
import {IReview} from "../../types";
import ThumbUp from "../icons/thumb-up";
import {CustomButton} from "../core/button/Button";

const ReviewList = styled.li`
  border-bottom: 1px solid rgb(238, 238, 238);
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const Article= styled.article`
  padding: 1.5rem 0;
`
const Footer = styled.footer`
  display: flex;
  align-items: center;
`

const IconButton = styled(CustomButton)`
  display: flex;
  background-color: transparent;
  color: ${props => props.theme.destructiveColor}
  span {
    margin-left: 0.25rem;
  }
`

function Review({content, likes, rate}:IReview) {
  return (
    <ReviewList>
      <Header>
        <Rating ratingValue={rate ? rate : 0} size={30}/>
        <div>user</div>
      </Header>
      <Article>
        {content}
      </Article>
      <Footer>
        <IconButton>
          <ThumbUp/>
          <span>{likes}</span>
        </IconButton>
      </Footer>

    </ReviewList>
  );
}

export default Review;