import styled, { css } from "styled-components";
import { Format } from "../modal/Modal.style";
import {themedPalette} from "../../../styles/theme";

export const Container = styled.div<{ format: Format }>`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.25rem;
  background-color: ${themedPalette.bg_color1};
  border: 1px solid ${(props) => props.theme.gray_lighter};
  border-radius: 8px;
  row-gap: 3rem;
  z-index: 5;
  ${({format}) => {
    if (format === "vertical") {
      return css`
        width: 20rem;
        height: 16rem;
      `;
    } else if (format === "horizontal") {
      return css`
        width: 22rem;
        height: 10rem;
      `;
    }
  }}
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;
