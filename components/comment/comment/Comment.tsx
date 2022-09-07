import { useSelector } from "react-redux";
import { ICommentResponse } from "../../../interfaces";
import { selectUser } from "../../../store/slices/user";
import { ContentFont, TitleFont } from "../../core/font/TitleFonts";
import { Button, ButtonContainer, CommentBox, Header } from "./Comment.style";

function Comment({ memberResponse, content, createdDate }: ICommentResponse) {
  const { user } = useSelector(selectUser);
  const currentUserId = user?.id;
  const commentUserId = memberResponse.id;
  const { username } = memberResponse;

  return (
    <CommentBox>
      <Header>
        <div>
          <TitleFont fontSize="1rem">{username}</TitleFont>
          <ContentFont fontSize="0.875rem" color="gray">
            {new Date(createdDate).toLocaleTimeString()}
          </ContentFont>
        </div>
        {currentUserId === commentUserId ? (
          <ButtonContainer>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonContainer>
        ) : null}
      </Header>
      <p>{content}</p>
    </CommentBox>
  );
}

export default Comment;
