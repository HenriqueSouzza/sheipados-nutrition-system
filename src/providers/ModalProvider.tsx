import { ReactNode, useMemo, useState } from "react";
import { ModalContext, ModalContextProps } from "@/contexts";
import { Modal } from "@/components";

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState<ReactNode>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModal = (content: ReactNode) => {
    setContentModal(content);
    setIsOpen(true);
  };

  const ModalContextValue: ModalContextProps = useMemo(() => ({
    isOpen,
    handleModal,
    handleClose
  }), [isOpen]);

  return (
    <ModalContext.Provider value={ModalContextValue}>
      {children}
      <Modal onClose={handleClose} open={isOpen}>
        <>{contentModal}</>
      </Modal>
    </ModalContext.Provider>
  )
}