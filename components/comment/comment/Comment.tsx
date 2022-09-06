import { ICommentResponse } from "../../../interfaces";
import { ContentFont, TitleFont } from "../../core/font/TitleFonts";
import { CommentBox, Header } from "./Comment.style";

function Comment({ memberResponse, content, createdDate }: ICommentResponse) {
  const { username } = memberResponse;
  return (
    <CommentBox>
      <Header>
        <TitleFont fontSize="1rem">{username}</TitleFont>
        <ContentFont fontSize="0.875rem" color="gray">
          {new Date(createdDate).toLocaleTimeString()}
        </ContentFont>
      </Header>
      <p>{content}</p>
    </CommentBox>
  );
}

export default Comment;
