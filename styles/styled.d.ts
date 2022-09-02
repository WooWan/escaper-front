import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    primaryColor: string;
    secondaryColor: string;
    buttonText: string;
    destructiveColor: string;
    border: string;
    gray: string;
    gray_lighter: string;
    kakao: string;
    text_light1: string;
    text_light2: string;
    text_dark1: string;
    text_dark2: string;
  }
}
