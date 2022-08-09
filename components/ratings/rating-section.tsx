import AverageRating from "./average-rating";
import UserRating from "./user-rating";
import styled from "styled-components";

const RatingWrapper= styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
function RatingSection() {

  return (
    <RatingWrapper>
      <UserRating/>
      <AverageRating/>
    </RatingWrapper>
  );
}

export default RatingSection;