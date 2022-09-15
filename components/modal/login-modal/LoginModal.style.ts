import styled, { css } from "styled-components";
import { Format } from "../modal/Modal.style";

export const Container = styled.div<{ format: Format }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid;
  border-color: ${(props) => props.theme.gray_lighter};
  border-radius: 8px;
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

export const CancelButtonWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
`;
export const SignInUpText = styled.h1`
  margin-bottom: 1.5rem;
`;
export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const ButtonTextWrapper = styled.div`
  font-weight: bold;
`;
export const LoginButtonList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  width: 100%;
`;

export const LoginButton = styled.button`
  display: grid;
  grid-template-columns: 32px 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid;
  border-color: ${(props) => props.theme.gray};
  border-radius: 8px;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0.5rem 0.75rem;
  cursor: pointer;
`;

export const KakaoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7e600;
  width: 32px;
  height: 32px;
`;
