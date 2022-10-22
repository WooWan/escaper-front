import {themedPalette} from "../../styles/theme";
import styled from "styled-components";

const SvgPath = styled.path`
  fill: ${themedPalette.moon};
  color: ${themedPalette.gray1}
`

export default function Moon() {
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="1.5rem">
      <SvgPath strokeLinecap="round" strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
    </svg>
  
  );
}