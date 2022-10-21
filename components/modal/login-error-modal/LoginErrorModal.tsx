import { useDispatch } from "react-redux";
import styled from "styled-components";
import { closeModal, openModal } from "../../../store/slices/Modal";
import Font from "../../core/font/Font";
import {
  ButtonWrapper,
  Footer,
  Container,
} from "./LoginErrorModal.style";
import Button from "../../core/button/Button";

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
        <Font fontType="title" fontSize="1.375rem">로그인 후 이용해주세요.</Font>
      </Content>
      <Footer>
        <ButtonWrapper>
          <Button
            buttonType="destructive"
            onClick={() => dispatch(closeModal())}
            isTextWhite
          >
            취소
          </Button>
          <Button buttonType="primary" onClick={handleModalOpen} isTextWhite>
            로그인
          </Button>
        </ButtonWrapper>
      </Footer>
    </Container>
  );
}

export default LoginErrorModal;
