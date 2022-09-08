import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { ICommentResponse } from "../../../interfaces";
import { selectUser } from "../../../store/slices/user";
import { ContentFont, TitleFont } from "../../core/font/TitleFonts";
import CommentRegister from "../register/Register";
import { Button, ButtonContainer, Container, Header } from "./Comment.style";

function Comment({
  memberResponse,
  content,
  createdDate,
  id,
}: ICommentResponse) {
  const { user } = useSelector(selectUser);
  const userId = user?.id;
  const commentUserId = memberResponse.id;
  const { username } = memberResponse;
  const [isEdited, setIsEdited] = useState(false);
  const router = useRouter();
  const postId = router.query.id;
  const handleEditComment = () => {
    setIsEdited((prev) => !prev);
  };

  return (
    <Container>
      {isEdited ? (
        <CommentRegister
          commentId={id}
          postId={postId}
          content={content}
          handleEditComment={handleEditComment}
        />
      ) : (
        <>
          <Header>
            <div>
              <TitleFont fontSize="1rem">{username}</TitleFont>
              <ContentFont fontSize="0.875rem" color="gray">
                {new Date(createdDate).toLocaleTimeString()}
              </ContentFont>
            </div>
            {userId === commentUserId ? (
              <ButtonContainer>
                <Button onClick={handleEditComment}>수정</Button>
                <Button>삭제</Button>
              </ButtonContainer>
            ) : null}
          </Header>
          <p>{content}</p>
        </>
      )}
    </Container>
  );
}

export default Comment;
