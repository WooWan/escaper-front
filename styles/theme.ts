import { DefaultTheme } from "styled-components";

type Theme = "light" | "dark";
type ThemeVariables = {
  text_color: string;
  bg_color: string;
  primary_color: string;
  secondary_color: string;
  button_text: string;
  destructive_color: string;
  border: string;
  gray: string;
  gray_normal: string;
  gray_lighter: string;
  kakao: string;
  text_light1: string;
  text_light2: string;
  text_dark1: string;
  text_dark2: string;
}
export const themeVariables: Record<Theme, ThemeVariables>= {
  light: {
    bg_color: "white",
    text_color: "black",
    button_text: "#FFEFEF",
    destructive_color: "#FF6B6B",
    primary_color: "#0173F7",
    secondary_color: "rgb(3,218,197)",
    border: "#E9ECEF",
    gray: "rgba(107, 114, 128, 0.5)",
    gray_normal: "#717171",
    gray_lighter: "#E5E7EB",
    kakao: "#FEE500",
    text_dark1: "#212529",
    text_dark2: "#495057",
    text_light1: "#ECECEC",
    text_light2: "#D9D9D9",
  },
  dark: {
    bg_color: "black",
    text_color: "black",
    button_text: "#FFEFEF",
    destructive_color: "#FF6B6B",
    primary_color: "#0173F7",
    secondary_color: "rgb(3,218,197)",
    border: "#E9ECEF",
    gray: "rgba(107, 114, 128, 0.5)",
    gray_normal: "#717171",
    gray_lighter: "#E5E7EB",
    kakao: "#FEE500",
    text_dark1: "#212529",
    text_dark2: "#495057",
    text_light1: "#ECECEC",
    text_light2: "#D9D9D9",
  }
}

//change css variable from snake case to kebab case
const convertSnakeToKebab = (variables: ThemeVariables) => {
  const keys = Object.keys(variables) as (keyof ThemeVariables)[];
  return keys.reduce(
    (acc, key) =>
      acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
    '',
  );
}

export const themes = {
  light: convertSnakeToKebab(themeVariables.light),
  dark: convertSnakeToKebab(themeVariables.dark)
}

export const cssVariables = (name: keyof ThemeVariables) => `var(${name})`;

export const lightTheme: DefaultTheme = {
  dark: {
    bgColor: "#000"
  },
  bgColor: "white",
  textColor: "black",
  buttonText: "#FFEFEF",
  destructiveColor: "#FF6B6B",
  primaryColor: "#0173F7",
  secondaryColor: "rgb(3,218,197)",
  border: "#E9ECEF",
  gray: "rgba(107, 114, 128, 0.5)",
  gray_normal: "#717171",
  gray_lighter: "#E5E7EB",
  kakao: "#FEE500",
  text_dark1: "#212529",
  text_dark2: "#495057",
  text_light1: "#ECECEC",
  text_light2: "#D9D9D9",
};
