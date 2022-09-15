import styled, { css } from "styled-components";
import { Format } from "../basic/Modal";

export const Container = styled.div<{ format: Format }>`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.25rem;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid;
  border-color: ${(props) => props.theme.gray_lighter};
  border-radius: 8px;
  row-gap: 3rem;
  z-index: 5;
  ${({ format }) => {
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.75rem 1.5rem 1.5rem 1.5rem;
  width: 100%;
  height: 100%;
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
