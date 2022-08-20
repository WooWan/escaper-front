import React, { useState } from "react";
import {
  ButtonTextWrapper,
  CancelButtonWrapper,
  Header,
  LoginButton,
  LoginWrapper,
  LongButtonList,
  ModalContainer,
  ModalWrapper,
  Navigator,
  SignInUpText,
} from "./NavigationHeader.style";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Cancel from "../../icons/cancel";
import GoogleIcon from "../../icons/GoogleIcon";
import { useAxiosInterceptor } from "../../../utils/hooks/useAxiosInterceptor";

const base = `http://localhost:8080`;
const google = `/oauth2/authorization/google?redirect_uri=`;
const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";

const google_auth = base + google + OAUTH2_REDIRECT_URI;

const LoginBox = styled.div``;

function NavigationHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useAxiosInterceptor();
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Header>
      <Link href="/">
        <Image src="/vercel.svg" alt="" width={150} height={150} />
      </Link>
      <Navigator>
        <Link href="/post/register">
          <a>방탈출 모집</a>
        </Link>
        <Link href="/cafe">
          <a>카페</a>
        </Link>
        <Link href="/theme">
          <a>테마</a>
        </Link>
        <LoginBox onClick={handleModalOpen}>로그인/회원가입</LoginBox>
        {isModalOpen ? (
          <ModalContainer onClick={handleModalClose}>
            <ModalWrapper>
              <CancelButtonWrapper onClick={handleModalClose}>
                <Cancel />
              </CancelButtonWrapper>
              <LoginWrapper>
                <SignInUpText>로그인/회원가입</SignInUpText>
                <LongButtonList>
                  <Link href={google_auth}>
                    <LoginButton>
                      <GoogleIcon />
                      <ButtonTextWrapper>
                        <p>구글 계정으로 계속하기</p>
                      </ButtonTextWrapper>
                    </LoginButton>
                  </Link>
                </LongButtonList>
              </LoginWrapper>
            </ModalWrapper>
          </ModalContainer>
        ) : null}

        {/* <KakaoLoginButton /> */}
      </Navigator>
    </Header>
  );
}

export default NavigationHeader;
