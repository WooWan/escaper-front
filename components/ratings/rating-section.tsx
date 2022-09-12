import AverageRating from "./average-rating";
import UserRating from "./user-rating";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  max-height: 140px;
  min-height: 100px;
`;
interface IProps {
  memberRating: number | undefined;
  count: number;
  averageRating: number;
}
function RatingSection({ memberRating, count, averageRating }: IProps) {
  return (
    <Container>
      <UserRating rating={memberRating} />
      <AverageRating rating={averageRating} count={count} />
    </Container>
  );
}

export default RatingSection;
