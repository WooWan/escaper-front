import React, { useRef } from "react";
import { useAddComment, useUpdateComment } from "../../../utils/comment";
import { useRouter } from "next/router";
import useValidateUser from "../../../utils/useValidateUser";
import TextButton from "../../core/button/text-button/TextButton";
import { ButtonWrapper, CommentTextArea } from "./Register.style";

interface IProps {
  commentId?: number;
  postId: string | string[] | undefined;
  content?: string;
  handleEditComment?: () => void;
}

function CommentRegister({
  commentId,
  postId,
  content,
  handleEditComment,
}: IProps) {
  const router = useRouter();
  const queryId = router.query.id?.toString() ?? "";
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const { mutate: addComment } = useAddComment(postId);
  const { mutate: editComment } = useUpdateComment(postId);
  const { validateUser } = useValidateUser();

  const handleAddCommentClick = () => {
    const content = commentRef.current?.value;
    if (!content) return;
    const postId = +queryId;
    commentRef.current.value = "";

    if (commentId) {
      editComment({ commentId, postId, content });
    } else {
      addComment({ postId, content });
    }
    handleEditComment?.();
  };

  return (
    <div>
      <CommentTextArea
        name=""
        id=""
        placeholder="댓글을 작성하세요"
        ref={commentRef}
        onClick={validateUser}
        defaultValue={content}
      />
      <ButtonWrapper>
        <TextButton buttonType="primary" onClick={handleAddCommentClick}>
          댓글 작성
        </TextButton>
      </ButtonWrapper>
    </div>
  );
}

export default CommentRegister;
