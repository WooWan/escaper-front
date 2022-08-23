import { useSelector } from "react-redux";
import { selectModal } from "../../../store/slices/Modal";
import LoginErrorModal from "../../modal/login-error-modal/LoginErrorModal";
import LoginModal from "../../modal/login-modal/LoginModal";

function Modal() {
  const state = useSelector(selectModal);
  const { modalType } = state;

  if (modalType === "LoginModal") {
    return <LoginModal />;
  } else {
    return <LoginErrorModal />;
  }
}

export default Modal;
