type ThemeVariables = {
  bg_color1: string;
  text1: string;
  border1: string;
  gray1: string;
  primary: string;
  secondary: string;
  destructive: string;
  white: string,
  kakao: string,
  dark_mode_icon: string,
};

type Theme = 'light' | 'dark';
type VariableKey = keyof ThemeVariables;


const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    bg_color1: '#F8F9FA',
    text1: '#0F1419',
    border1: "#DADCE0",
    gray1: "#717171",
    primary: "#0173F7",
    secondary: "#03DAC5",
    destructive: "#FF6B6B",
    white: "#FFFFFF",
    kakao: "#f7e600",
    dark_mode_icon: "#F8F9FA",
  },
  dark: {
    bg_color1: '#15202B',
    text1: '#F6F9F9',
    border1:"#DADCE0",
    gray1: "#717171",
    primary: "#0173F7",
    secondary: "#03DAC5",
    destructive: "#FF6B6B",
    white: "#FFFFFF",
    kakao: "#f7e600",
    dark_mode_icon: "#F8D904"
  },
};

const buildCssVariables = (variables: ThemeVariables) => {
  const keys = Object.keys(variables) as (keyof ThemeVariables)[];
  return keys.reduce(
    (acc, key) =>
      acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
    '',
  );
};

export const themes = {
  light: buildCssVariables(themeVariableSets.light),
  dark: buildCssVariables(themeVariableSets.dark),
};

const cssVar = (name: VariableKey) => `var(--${name.replace(/_/g, '-')});`;

const variableKeys = Object.keys(themeVariableSets.light) as VariableKey[];

type ThemedPalette = Record<VariableKey, string>;

export const themedPalette: Record<VariableKey, string> = variableKeys.reduce(
  (acc, current) => {
    acc[current] = cssVar(current);
    return acc;
  },
  {} as ThemedPalette,
);