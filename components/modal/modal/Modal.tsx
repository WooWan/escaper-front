import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModal } from "../../../store/slices/Modal";
import LoginErrorModal from "../login-error-modal/LoginErrorModal";
import LoginModal from "../login-modal/LoginModal";
import { Container, Overlay } from "./Modal.style";

export const Modals = {
  LoginModal: "LoginModal",
  LoginErrorModal: "LoginErrorModal",
} as const;

const MODAL_COMPONENTS = [
  {
    type: Modals.LoginModal,
    component: <LoginModal />,
  },
  {
    type: Modals.LoginErrorModal,
    component: <LoginErrorModal />,
  },
];

function ModalManager() {
  const dispatch = useDispatch();
  const { modalType, isOpen } = useSelector(selectModal);

  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });
  const renderModal = () => {
    return findModal?.component;
  };
  if (!isOpen) return null;

  return (
    <Container>
      <Overlay onClick={() => dispatch(closeModal())} />
      {renderModal()}
    </Container>
  );
}

export default ModalManager;
