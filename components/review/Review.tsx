import {Rating} from "react-simple-star-rating";
import styled from "styled-components";
import {IReview} from "../../types";

const Container = styled.li`
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

function Review({content, likes, rate}:IReview) {

  return (
    <Container>
      <Header>
        <Rating ratingValue={rate ? rate : 0} size={30}/>
        <div>user</div>
      </Header>
      <Article>
        {content}
      </Article>
      <footer>{likes}(좋아요 수)</footer>
    </Container>
  );
}

export default Review;