import {useState} from 'react';
import {Rating} from 'react-simple-star-rating';
import styled from "styled-components";
import {GeneralRating, RatingInfo, RatingTitle, Score, ScoreInfo} from "../../styles/components";

const UserRatingBox = styled(GeneralRating)`
`

function UserRating() {
  const [rating, setRating] = useState(0)
  return (
    <UserRatingBox>
      <RatingTitle>내 별점</RatingTitle>
      <RatingInfo>
        <Score>3.0</Score>
        <ScoreInfo>별점을 남겨주세요</ScoreInfo>
        <Rating ratingValue={rating} allowHalfIcon/>
      </RatingInfo>
    </UserRatingBox>
  );
}

export default UserRating;