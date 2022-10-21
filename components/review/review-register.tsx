import styled from "styled-components";
import React, { useState } from "react";
import { useAddReview } from "../../api/theme";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/slices/user/user";
import useValidateUser from "../../utils/useValidateUser";
import { openModal } from "../../store/slices/Modal";
import Button from "../core/button/Button";

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
  const dispatch = useDispatch();
  const { validateUser } = useValidateUser();
  const themeId = router.query.id;
  const { user, isLogin } = useSelector(selectUser);
  const memberId = user?.id;

  const [review, setReview] = useState("");
  const { mutate: addReview } = useAddReview(themeId);

  const onReviewHandle = () => {
    if (!isLogin) {
      dispatch(
        openModal({
          modalType: "LoginModal",
          isOpen: true,
        })
      );
    } else {
      addReview({ themeId, memberId, review });
      setReview("");
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
        value={review}
        id=""
        placeholder="방탈출에 대한 내 평가를 남겨보세요!"
        onChange={handleReviewChange}
        onClick={validateUser}
      />
      <ButtonWrapper>
        <Button buttonType="primary" onClick={onReviewHandle} isTextWhite>
          리뷰 작성
        </Button>

      </ButtonWrapper>
    </>
  );
}

export default ReviewRegister;
