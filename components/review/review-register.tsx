import styled from "styled-components";
import React, { useState } from "react";
import { useAddReview } from "../../utils/theme";
import { useRouter } from "next/router";
import TextButton from "../core/button/text-button/TextButton";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/user";

const CommentTextArea = styled.textarea`
  padding: 1rem 1rem 1.5rem;
  width: 100%;
  margin-bottom: 1.25rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
function ReviewRegister() {
  const router = useRouter();
  const themeId = router.query.id;

  const { user } = useSelector(selectUser);
  const memberId = user?.id;

  const [review, setReview] = useState("");
  const { mutate: addReview } = useAddReview(themeId);

  const onReviewHandle = () => {
    if (memberId) {
      addReview({ themeId, memberId, review });
    }
  };

  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };
  return (
    <>
      <CommentTextArea
        name=""
        id=""
        placeholder="방탈출에 대한 내 평가를 남겨보세요!"
        onChange={handleReviewChange}
      />
      <ButtonWrapper>
        <TextButton onClick={onReviewHandle}>리뷰 작성</TextButton>
      </ButtonWrapper>
    </>
  );
}

export default ReviewRegister;
