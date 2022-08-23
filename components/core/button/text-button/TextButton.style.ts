import styled, { DefaultTheme } from "styled-components";
import { ButtonType } from "./TextButton";

const handleButtonColor = (theme: DefaultTheme, buttonType?: ButtonType) => {
  switch (buttonType) {
    case "primary":
      console.log(theme.primaryColor);
      return theme.primaryColor;
    case "destructive":
      console.log(theme.destructiveColor);
      return theme.destructiveColor;
    default:
      return theme.secondaryColor;
  }
};

export const Button = styled.button<{ buttonType?: ButtonType }>`
  color: ${(props) => props.theme.buttonText};
  border-radius: 0.5rem;
  width: 4rem;
  height: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  background-color: ${({ buttonType, theme }) =>
    handleButtonColor(theme, buttonType)};
`;
