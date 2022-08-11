import React, {useState} from 'react';
import {RatingTitle, RatingInfo, Score, ScoreInfo, GeneralRating} from "../../styles/components";
import styled from "styled-components";
import {Rating} from "../rating-bar/rating";

const UserRatingBox= styled(GeneralRating)`

`

function AverageRating() {
  const [rating] = useState(0);
  return (
    <UserRatingBox>
      <RatingTitle>평균 별점</RatingTitle>
      <RatingInfo>
        <Score>3.0</Score>
        <ScoreInfo>778개의 별점</ScoreInfo>
        <Rating ratingValue={rating} readonly transition={true}/>
      </RatingInfo>
    </UserRatingBox>
  );
}

export default AverageRating;