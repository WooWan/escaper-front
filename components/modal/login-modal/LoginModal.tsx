import Link from "next/link";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slices/Modal";
import Cancel from "../../icons/cancel";
import GoogleIcon from "../../icons/GoogleIcon";
import KakaoIcon from "../../icons/KakaoIcon";
import {
  CancelButtonWrapper,
  LoginWrapper,
  LoginButtonList,
  Container,
  KakaoWrapper,
} from "./LoginModal.style";
import Font from "../../core/font/Font";
import Button from "../../core/button/Button";

function LoginModal() {
  const dispatch = useDispatch();

  const SERVER = process.env.NEXT_PUBLIC_SERVER_HOST;
  const HOST = process.env.NEXT_PUBLIC_HOST_NAME;

  const googleUrl = `${SERVER}/oauth2/authorization/google?redirect_uri=${HOST}&signup=${process.env.NEXT_PUBLIC_SIGNUP}`;

  const kakaoUrl = `${SERVER}/oauth2/authorization/kakao?redirect_uri=${HOST}&signup=${process.env.NEXT_PUBLIC_SIGNUP}`;
  
  return (
    <Container format={"vertical"}>
      <CancelButtonWrapper onClick={() => dispatch(closeModal())}>
        <Cancel/>
      </CancelButtonWrapper>
      <LoginWrapper>
        <Font fontType="subtitle" style={{paddingBottom: "1rem"}}>로그인/회원가입</Font>
        <LoginButtonList>
          <Link href={googleUrl}>
            <Button buttonType="basic" width="100%" hasBorder
                    style={{padding: "1.25rem", display: "inline-flex", gap: "0.75rem"}}>
              <GoogleIcon/>
              <Font>구글 계정으로 계속하기</Font>
            </Button>
          </Link>
          <Link href={kakaoUrl}>
            <Button buttonType="basic" width="100%" hasBorder
                    style={{padding: "1.25rem", display: "inline-flex", gap: "0.75rem"}}>
              <KakaoWrapper>
                <KakaoIcon/>
              </KakaoWrapper>
              <Font>카카오 계정으로 계속하기</Font>
            </Button>
          </Link>
        </LoginButtonList>
      </LoginWrapper>
    </Container>
  );
}

export default LoginModal;
