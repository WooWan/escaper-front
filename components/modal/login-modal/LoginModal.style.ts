import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.75rem;
  padding: 2.5rem 1.5rem;
  width: 100%;
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
