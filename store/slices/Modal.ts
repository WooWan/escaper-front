import { RootState } from "../config";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modals } from "../../components/modal/modal/Modal";

export type modalTypes = typeof Modals[keyof typeof Modals];
interface ModalState {
  modalType: modalTypes;
  isOpen: boolean;
}

const initialState: ModalState = {
  modalType: "LoginErrorModal",
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state: ModalState, actions: PayloadAction<ModalState>) => {
      const { modalType } = actions.payload;
      state.modalType = modalType;
      state.isOpen = true;
    },
    closeModal: (state: ModalState) => {
      state.isOpen = false;
    },
  },
});

export const selectModal = (state: RootState) => state.modal;
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
