import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../../store/slices/Modal";
import TextButton from "../../core/button/text-button/TextButton";
import Modal from "../basic/Modal";
import {
  ButtonWrapper,
  Content,
  Footer,
  Wrapper,
} from "./LoginErrorModal.style";

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
    <Modal format={"horizontal"}>
      <Wrapper>
        <main>
          <Content>로그인 후 이용해주세요.</Content>
        </main>
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
      </Wrapper>
    </Modal>
  );
}

export default LoginErrorModal;
