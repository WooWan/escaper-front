import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../../store/slices/user";
import {
  GeneralRating,
  RatingInfo,
  RatingTitle,
  Score,
} from "../../styles/components";
import { rateTheme } from "../../utils/rating";
import { Rating } from "../core/rating-bar/rating";

const UserRatingBox = styled(GeneralRating)``;

function UserRating() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const themeId = router.query.id;
  const { isLogin, user } = useSelector(selectUser);
  const userId = user?.id;

  const { mutate: handleRate } = useMutation(rateTheme);

  const onHandleRating = (rating: number) => {
    console.log(rating);
    if (userId) {
      setRating(rating);
      handleRate({ themeId, memberId: userId, rating });
    } else {
      /**
       * 회원가입 또는 로그인 로직 요청
       */
    }
  };
  const toolTipArray = [
    "별점을 남겨주세요",
    "싫어요",
    "재미 없어요",
    "별로에요",
    "많이 아쉬워요",
    "흙길",
    "풀길",
    "풀꽃길",
    "꽃길",
    "꽃밭길",
    "인생 테마에요!",
  ];

  return (
    <UserRatingBox>
      <RatingTitle>내 별점</RatingTitle>
      <RatingInfo>
        <Score>{rating}</Score>
        <Rating
          ratingValue={rating}
          allowHalfIcon
          transition={true}
          tooltipArray={toolTipArray}
          showTooltip
          tooltipDefaultText={"별점을 남겨주세요"}
          onClick={onHandleRating}
        />
      </RatingInfo>
    </UserRatingBox>
  );
}

export default UserRating;
