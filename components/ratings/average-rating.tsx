import React, { useState } from "react";
import {
  RatingTitle,
  RatingInfo,
  Score,
  ScoreInfo,
  GeneralRating,
} from "../../styles/components";
import styled from "styled-components";
import { Rating } from "../core/rating-bar/rating";

const UserRatingBox = styled(GeneralRating)``;
interface IProps {
  rating: number;
  count: number;
}

function AverageRating({ rating, count }: IProps) {
  return (
    <UserRatingBox>
      <RatingTitle>평균 별점</RatingTitle>
      <RatingInfo>
        <Score>{rating?.toFixed(2)}</Score>
        <ScoreInfo>{count}개의 별점</ScoreInfo>
        <Rating
          fillColor="#0173F7"
          ratingValue={rating ? rating * 20 : 0}
          readonly
          transition={true}
          size={40}
        />
      </RatingInfo>
    </UserRatingBox>
  );
}

export default AverageRating;
