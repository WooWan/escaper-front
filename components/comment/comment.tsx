import { ICommentResponse } from "../../types";
import styled from "styled-components";

const CommentBox = styled.div`
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  border-bottom: 1px solid;
  border-bottom-color: ${(props) => props.theme.gray};
`;

function Comment({ content }: ICommentResponse) {
  return (
    <CommentBox>
      <p>{content}</p>
    </CommentBox>
  );
}

export default Comment;
