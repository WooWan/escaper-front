import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.buttonText};
  border-radius: 15%;
  width: 4rem;
  height: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
`;
