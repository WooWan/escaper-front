import styled from "styled-components";

export const ButtonWrapper = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.buttonText};
  border-radius: 15%;
  width: 4rem;
  height: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
`;
