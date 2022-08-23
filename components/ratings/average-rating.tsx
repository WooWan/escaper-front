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
}

function AverageRating({ rating }: IProps) {
  const [score, setScore] = useState(rating);
  return (
    <UserRatingBox>
      <RatingTitle>평균 별점</RatingTitle>
      <RatingInfo>
        <Score>{score}</Score>
        <ScoreInfo>778개의 별점</ScoreInfo>
        <Rating ratingValue={score} readonly transition={true} />
      </RatingInfo>
    </UserRatingBox>
  );
}

export default AverageRating;
