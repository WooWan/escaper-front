import { RootState } from "./../config";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalType = "basic" | "LoginModal";
interface ModalState {
  modalType: ModalType;
  content: string;
  isOpen: boolean;
}
const initialState: ModalState = {
  modalType: "basic",
  content: "",
  isOpen: true,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state: ModalState, actions: PayloadAction<ModalState>) => {
      const { modalType, content } = actions.payload;
      state.modalType = modalType;
      state.content = content;
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
