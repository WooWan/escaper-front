import React, { useEffect, useState } from "react";
import { Header, LoginBox, Navigator } from "./NavigationHeader.style";
import Image from "next/image";
import Link from "next/link";
import { useAxiosInterceptor } from "../../../utils/hooks/useAxiosInterceptor";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/slices/user";
import { openModal } from "../../../store/slices/Modal";

function NavigationHeader() {
  const dispatch = useDispatch();

  const { isLogin } = useSelector(selectUser);
  useAxiosInterceptor();

  const handleModalOpen = () => {
    dispatch(
      openModal({
        modalType: "LoginModal",
        isOpen: true,
      })
    );
  };

  return (
    <Header>
      <Link href="/">
        <a>
          <Image src="/vercel.svg" alt="" width={150} height={150} />
        </a>
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
      </Navigator>
    </Header>
  );
}

export default NavigationHeader;
