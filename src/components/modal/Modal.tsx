import { ModalProps as ModalPropsMUI } from '@mui/material';
import * as S from './Modal.styles';
import { Close } from '@/icons';

interface ModalProps extends ModalPropsMUI {
  onClose: () => void
}

export const Modal = ({ children, onClose, ...props }: ModalProps) => (
  <S.Modal onClose={onClose} {...props}>
    <S.Content>
      <S.Close onClick={onClose}>
        <Close />
      </S.Close>
      {children}
    </S.Content>
  </S.Modal>
)