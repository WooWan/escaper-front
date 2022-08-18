import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
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

  const { mutate: handleRate } = useMutation(rateTheme);

  const onHandleRating = (rate: number) => {
    setRating(rate);
    handleRate({ themeId, rate });
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
