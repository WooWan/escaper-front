import styled, { css } from "styled-components";
import { Format } from "./Modal";

export const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  outline: none;
`;

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const ModalWrapper = styled.div<{ format: Format }>`
  position: relative;
  display: flex;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid;
  border-color: ${(props) => props.theme.gray_lighter};
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  row-gap: 0.75rem;
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
