import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slices/Modal";
import { ModalBackground, ModalContainer, ModalWrapper } from "./Modal.style";

export type Format = "vertical" | "horizontal";

interface IProps {
  children: ReactNode;
  format: Format;
}

function Modal({ children, format }: IProps) {
  const dispatch = useDispatch();

  return (
    <ModalContainer>
      <ModalBackground onClick={() => dispatch(closeModal())} />
      <ModalWrapper format={format}>{children}</ModalWrapper>
    </ModalContainer>
  );
}

export default Modal;
