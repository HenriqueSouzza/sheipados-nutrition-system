import { createContext, ReactNode } from "react";

export interface ModalContextProps {
  isOpen: boolean
  handleModal: (value: ReactNode) => void
}

const ModalContextValues: ModalContextProps = {
  isOpen: false,
  handleModal: () => null,
}

export const ModalContext = createContext(ModalContextValues);
