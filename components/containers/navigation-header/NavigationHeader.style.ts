import styled from "styled-components";

export const Navigator = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 20px;
  a {
    font-size: 18px;
    font-weight: 600;
    color: black;
  }
`;
export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  outline: none;
`;
export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  width: 20rem;
  height: 16rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid;
  border-color: ${(props) => props.theme.gray_lighter};
  border-radius: 8px;
  padding: 2.5rem 1.5rem;
  flex-direction: column;
  align-items: center;
  row-gap: 0.75rem;
`;
export const CancelButtonWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
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
export const LongButtonList = styled.ul`
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

export const KakaoIconWrapper = styled.div`
  background-color: ${(props) => props.theme.kakao};
  padding: 0.2rem 0.1rem;
`;
