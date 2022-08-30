import styled from "styled-components";
import TextButton from "../../../core/button/text-button/TextButton";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 600px;
  margin: 0 auto;
  gap: 16px;
`;

export const SubmitButton = styled(TextButton).attrs({
  type: "submit",
  value: "글 등록",
})``;

export const Input = styled.input`
  width: 65%;
  padding: 0.5rem 0.4rem;
  border: none;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.gray_lighter};
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;
