import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slices/Modal";
import Cancel from "../../icons/cancel";
import GoogleIcon from "../../icons/GoogleIcon";
import KakaoIcon from "../../icons/KakaoIcon";

import {
  ButtonTextWrapper,
  CancelButtonWrapper,
  LoginButton,
  LoginWrapper,
  LoginButtonList,
  Container,
  SignInUpText,
  KakaoWrapper,
} from "./LoginModal.style";

function LoginModal() {
  const dispatch = useDispatch();
  const router = useRouter();

  const SERVER = process.env.NEXT_PUBLIC_SERVER_HOST;
  const HOST = process.env.NEXT_PUBLIC_HOST_NAME;

  const googleUrl = `${SERVER}/oauth2/authorization/google?redirect_uri=${HOST}&signup=${process.env.NEXT_PUBLIC_SIGNUP}`;

  const kakaoUrl = `${SERVER}/oauth2/authorization/kakao?redirect_uri=${HOST}${router.asPath}&signup=${process.env.NEXT_PUBLIC_SIGNUP}`;

  return (
    <Container format={"vertical"}>
      <CancelButtonWrapper onClick={() => dispatch(closeModal())}>
        <Cancel />
      </CancelButtonWrapper>
      <LoginWrapper>
        <SignInUpText>로그인/회원가입</SignInUpText>
        <LoginButtonList>
          <Link href={googleUrl}>
            <LoginButton>
              <GoogleIcon />
              <ButtonTextWrapper>
                <p>구글 계정으로 계속하기</p>
              </ButtonTextWrapper>
            </LoginButton>
          </Link>
          <Link href={kakaoUrl}>
            <LoginButton>
              <KakaoWrapper>
                <KakaoIcon />
              </KakaoWrapper>
              <ButtonTextWrapper>
                <p>카카오 계정으로 계속하기</p>
              </ButtonTextWrapper>
            </LoginButton>
          </Link>
        </LoginButtonList>
      </LoginWrapper>
    </Container>
  );
}

export default LoginModal;
