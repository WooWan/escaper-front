import Link from "next/link";
import styled from "styled-components";
import Cancel from "../../icons/cancel";
import GoogleIcon from "../../icons/GoogleIcon";
import {
  ButtonTextWrapper,
  CancelButtonWrapper,
  LoginButton,
  LoginWrapper,
  LongButtonList as LoginButtonList,
  ModalBackground,
  ModalContainer,
  ModalWrapper,
  SignInUpText,
} from "./LoginModal.style";

interface IProps {
  google_auth: string;
  handleModalClose: () => void;
}

function LoginModal({ google_auth, handleModalClose }: IProps) {
  return (
    <ModalContainer>
      <ModalBackground onClick={handleModalClose} />
      <ModalWrapper>
        <CancelButtonWrapper onClick={handleModalClose}>
          <Cancel />
        </CancelButtonWrapper>
        <LoginWrapper>
          <SignInUpText>로그인/회원가입</SignInUpText>
          <LoginButtonList>
            <Link href={google_auth}>
              <LoginButton>
                <GoogleIcon />
                <ButtonTextWrapper>
                  <p>구글 계정으로 계속하기</p>
                </ButtonTextWrapper>
              </LoginButton>
            </Link>
          </LoginButtonList>
        </LoginWrapper>
      </ModalWrapper>
    </ModalContainer>
  );
}

export default LoginModal;
