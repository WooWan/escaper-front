import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
interface ICounter {
  participation: number;
  incrementCount: () => void;
  decrementCount: () => void;
}

function Counter({ incrementCount, decrementCount, participation }: ICounter) {
  return (
    <Container>
      <span>모집인원</span>
      <button type="button" onClick={decrementCount}>
        -
      </button>
      <span>{participation}</span>
      <button type="button" onClick={incrementCount}>
        +
      </button>
    </Container>
  );
}

export default Counter;
