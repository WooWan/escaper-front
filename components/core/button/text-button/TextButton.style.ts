import styled, { DefaultTheme } from "styled-components";
import { ButtonType } from "./TextButton";

const handleButtonColor = (theme: DefaultTheme, buttonType?: ButtonType) => {
  switch (buttonType) {
    case "primary":
      return theme.primaryColor;
    case "destructive":
      return theme.destructiveColor;
    default:
      return theme.gray_lighter;
  }
};

const handleTextColor = (theme: DefaultTheme, buttonType?: ButtonType) => {
  if (buttonType === "basic") {
    return theme.text_dark1;
  } else {
    return theme.text_light1;
  }
};

export const Button = styled.button<{ buttonType?: ButtonType }>`
  border-radius: 0.5rem;
  width: 4rem;
  height: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  color: ${({ buttonType, theme }) => handleTextColor(theme, buttonType)};
  background-color: ${({ buttonType, theme }) =>
    handleButtonColor(theme, buttonType)};
`;
