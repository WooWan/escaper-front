import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeModal, openModal } from "../../../store/slices/Modal";
import TextButton from "../../core/button/text-button/TextButton";
import { TitleFont } from "../../core/font/TitleFonts";

import {
  ButtonWrapper,
  Footer,
  Container,
  Wrapper,
} from "./LoginErrorModal.style";

export const Content = styled.main`
  margin-left: 0.875rem;
`;
function LoginErrorModal() {
  const dispatch = useDispatch();
  const handleModalOpen = () => {
    dispatch(closeModal());
    dispatch(
      openModal({
        modalType: "LoginModal",
        isOpen: true,
      })
    );
  };
  return (
    <Container format={"horizontal"}>
      <Content>
        <TitleFont fontSize="1.375rem">로그인 후 이용해주세요.</TitleFont>
      </Content>
      <Footer>
        <ButtonWrapper>
          <TextButton
            buttonType="destructive"
            onClick={() => dispatch(closeModal())}
          >
            취소
          </TextButton>
          <TextButton buttonType="primary" onClick={handleModalOpen}>
            로그인
          </TextButton>
        </ButtonWrapper>
      </Footer>
    </Container>
    // </Modal>
  );
}

export default LoginErrorModal;
