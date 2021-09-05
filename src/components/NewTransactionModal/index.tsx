import Modal from "react-modal";
import { Container } from "./style";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTranscactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>New Transaction</h2>
        <input placeholder="Title" />
        <input type="number" placeholder="Value" />
        <input placeholder="Category" />
        <button type="submit">Done</button>
      </Container>
    </Modal>
  );
}
