import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./style";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

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
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>
      <Container>
        <h2>New Transaction</h2>
        <input placeholder="Title" />
        <input type="number" placeholder="Value" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Income icon" />
            <span>Income</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Outcome icon" />
            <span>Outcome</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Category" />
        <button type="submit">Done</button>
      </Container>
    </Modal>
  );
}
