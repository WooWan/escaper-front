import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
interface ICounter {
  participation: number;
  incrementCount: () => void;
  decrementCount: () => void;
}

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  column-gap: 0.2rem;
  padding-left: 0.5rem;
`;
function Counter({ incrementCount, decrementCount, participation }: ICounter) {
  return (
    <Container>
      <span>모집인원</span>
      <ButtonWrapper>
        <Button onClick={decrementCount}>-</Button>
        <span>{participation}</span>
        <Button onClick={incrementCount}>+</Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Counter;
