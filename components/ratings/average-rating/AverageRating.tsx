import {
  RatingInfo,
  GeneralRating,
} from "./AverageRating.style";
import styled from "styled-components";
import { Rating } from "../../core/rating-bar/rating";
import Font from "../../core/font/Font";

const UserRatingBox = styled(GeneralRating)``;
interface IProps {
  rating: number;
  count: number;
}

function AverageRating({ rating, count }: IProps) {
  return (
    <UserRatingBox>
      <Font fontType="subtitle" >평균 별점</Font>
      <RatingInfo>
        <Font fontType="title" fontSize="1.5rem">{rating?.toFixed(2)}</Font>
        <Font fontType="content" fontSize="0.875rem">{count}개의 별점</Font>
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
