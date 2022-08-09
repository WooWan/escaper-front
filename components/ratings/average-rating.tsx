import React, {useState} from 'react';
import { Rating } from 'react-simple-star-rating';
import {RatingTitle, RatingInfo, Score, ScoreInfo, GeneralRating} from "../../styles/components";
import styled from "styled-components";

const UserRatingBox= styled(GeneralRating)`

`
function AverageRating() {
  const [rating, setRating] = useState(0)
  return (
    <UserRatingBox>
      <RatingTitle>평균 별점</RatingTitle>
      <RatingInfo>
        <Score>3.0</Score>
        <ScoreInfo>778개의 별점</ScoreInfo>
        <Rating ratingValue={rating} readonly/>
      </RatingInfo>
    </UserRatingBox>
  );
}

export default AverageRating;