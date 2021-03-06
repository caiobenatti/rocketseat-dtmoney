// import styled from 'styled-components'

import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

// const Title = styled.h1` //vc usa aqui a tag HTML que vc quer modificar e usa a maiuscula no nome para nome da constante (best practices)
// color: #8257e6;
// font-size: 64px;
// ` //usa aspas para o styled-component ai vc usa o nome da constante como tag de HTML, vc pode usar encadeamento tipo no SASS

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      {/* importa o context do Transactions */}
      {/* isso eh um fragment, que nao interfere com as divs dentro do react, eh tipo uma div */}
      {/* <Title>Hello World</Title> */}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
