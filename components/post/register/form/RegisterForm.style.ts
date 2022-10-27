import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  padding: 4rem 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  margin: 0 auto;
  gap: 16px;
`;

export const Input = styled.input`
  width: 65%;
  padding: 0.5rem 0.4rem;
  border: none ${(props) => props.theme.gray_lighter};
  border-bottom: 2px solid;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 0.5rem;
`;
