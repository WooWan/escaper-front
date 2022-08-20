import React, { useState } from "react";
import { Header, LoginBox, Navigator } from "./NavigationHeader.style";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Cancel from "../../icons/cancel";
import GoogleIcon from "../../icons/GoogleIcon";
import { useAxiosInterceptor } from "../../../utils/hooks/useAxiosInterceptor";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/slices/user";
import LoginModal from "../login-modal/LoginModal";

const base = `http://localhost:8080`;
const google = `/oauth2/authorization/google?redirect_uri=`;
const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";

const google_auth = base + google + OAUTH2_REDIRECT_URI;

function NavigationHeader() {
  const { user, isLogin } = useSelector(selectUser);
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
        <LoginBox>
          <Link href="/post/register">
            <a>방탈출 모집</a>
          </Link>
        </LoginBox>
        <LoginBox>
          <Link href="/cafe">
            <a>카페</a>
          </Link>
        </LoginBox>
        <LoginBox>
          <Link href="/theme">
            <a>테마</a>
          </Link>
        </LoginBox>
        {isLogin ? (
          "로그아웃"
        ) : (
          <LoginBox onClick={handleModalOpen}>로그인/회원가입</LoginBox>
        )}

        {isModalOpen ? (
          <LoginModal
            google_auth={google_auth}
            handleModalClose={handleModalClose}
          />
        ) : null}
        {/* <KakaoLoginButton /> */}
      </Navigator>
    </Header>
  );
}

export default NavigationHeader;
