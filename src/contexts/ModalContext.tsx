import { createContext, ReactNode } from "react";

export interface ModalContextProps {
  isOpen: boolean
  handleClose: () => void
  handleModal: (value: ReactNode) => void
}

const ModalContextValues: ModalContextProps = {
  isOpen: false,
  handleClose: () => null,
  handleModal: () => null,
}

export const ModalContext = createContext(ModalContextValues);
