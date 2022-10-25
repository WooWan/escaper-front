import {createGlobalStyle} from "styled-components";
import {themedPalette, themes} from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${themedPalette.bg_color1};
    ${themes.light}
  }
  
  //사용자의 다크 모드 설정에 따라 다크 모드로 변경
  @media (prefers-color-scheme: dark) {
    body {
       background-color: ${themedPalette.bg_color1};
      ${themes.dark}
    }
  }

  body[data-theme='light'] {
     background-color: ${themedPalette.bg_color1};
    ${themes.light};
  }

  body[data-theme='dark'] {
    background-color: ${themedPalette.bg_color1};
    ${themes.dark};
  }

`

export default GlobalStyle;