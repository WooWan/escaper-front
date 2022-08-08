import React, {useRef} from 'react';
import styled from "styled-components";
import {useAddComment} from "../../utils/comment";
import {useRouter} from "next/router";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const CommentTextArea = styled.textarea`
  padding: 1rem 1rem 1.5rem;
  width: 100%;
  margin-bottom: 1.25rem;
`
const NumberOfComment = styled.h2`
  margin-bottom: 0.825rem;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5;
`
const RegisterButton = styled.button`
  font-weight: bold;
  border: none;
  height: 2rem;
  padding: 0 1.25rem;
  cursor: pointer;
  border-radius: 5px;
`

interface IProps {
  postId: number
  commentLength?: number
}

function CommentRegister({postId, commentLength}: IProps) {
  const router = useRouter();
  const queryId = router.query.id?.toString() ?? "";
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const {mutate: addComment} = useAddComment(postId);

  const handleAddCommentClick = () => {
    const content = commentRef.current?.value
    if (!content) {
      return;
    }
    const postId = +queryId
    commentRef.current.value = "";
    addComment({postId, content});
  };

  return (
    <div>
      <NumberOfComment>{commentLength}개의 댓글</NumberOfComment>
      <div>
        <CommentTextArea name="" id="" placeholder="댓글을 작성하세요" ref={commentRef} />
        <ButtonWrapper>
          <RegisterButton onClick={handleAddCommentClick}>댓글 작성</RegisterButton>
        </ButtonWrapper>
      </div>
    </div>
  );
}

export default CommentRegister;