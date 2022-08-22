import AverageRating from "./average-rating";
import UserRating from "./user-rating";
import styled from "styled-components";

const RatingWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
interface IProps {
  themeRating: number;
  memberRating: number | undefined;
}
function RatingSection({ themeRating, memberRating }: IProps) {
  console.log(themeRating);
  return (
    <RatingWrapper>
      <UserRating rating={memberRating} />
      <AverageRating rating={themeRating} />
    </RatingWrapper>
  );
}

export default RatingSection;
