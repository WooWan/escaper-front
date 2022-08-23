import Link from "next/link";
import { useDispatch } from "react-redux";
import { googleUrl } from "../../../constants/oauth";
import { closeModal } from "../../../store/slices/Modal";
import Cancel from "../../icons/cancel";
import GoogleIcon from "../../icons/GoogleIcon";
import KakaoIcon from "../../icons/KakaoIcon";
import Modal from "../basic/Modal";
import {
  ButtonTextWrapper,
  CancelButtonWrapper,
  LoginButton,
  LoginWrapper,
  LoginButtonList,
  ModalWrapper,
  SignInUpText,
  KakaoWrapper,
} from "./LoginModal.style";

function LoginModal() {
  const dispatch = useDispatch();
  return (
    <Modal format="vertical">
      <ModalWrapper>
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
            <Link href={googleUrl}>
              <LoginButton>
                {/* <KakaoIcon /> */}
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
      </ModalWrapper>
    </Modal>
  );
}

export default LoginModal;
