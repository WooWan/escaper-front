import React, { useRef } from "react";
import { useAddComment } from "../../../utils/comment";
import { useRouter } from "next/router";
import useValidateUser from "../../../utils/useValidateUser";
import TextButton from "../../core/button/text-button/TextButton";
import { TitleFont } from "../../core/font/TitleFonts";
import { ButtonWrapper, CommentTextArea } from "./register.style";

interface IProps {
  postId: number;
  commentLength?: number;
}

function CommentRegister({ postId, commentLength }: IProps) {
  const router = useRouter();
  const queryId = router.query.id?.toString() ?? "";
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const { mutate: addComment } = useAddComment(postId);
  const { validateUser } = useValidateUser();

  const handleAddCommentClick = () => {
    const content = commentRef.current?.value;
    if (!content) return;
    const postId = +queryId;
    commentRef.current.value = "";
    addComment({ postId, content });
  };

  return (
    <div>
      <TitleFont fontSize="1.125rem">{commentLength}개의 댓글</TitleFont>
      <div>
        <CommentTextArea
          name=""
          id=""
          placeholder="댓글을 작성하세요"
          ref={commentRef}
          onClick={validateUser}
        />
        <ButtonWrapper>
          <TextButton buttonType="primary" onClick={handleAddCommentClick}>
            댓글 작성
          </TextButton>
        </ButtonWrapper>
      </div>
    </div>
  );
}

export default CommentRegister;
