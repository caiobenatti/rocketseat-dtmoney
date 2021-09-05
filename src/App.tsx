// import styled from 'styled-components'

import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTranscactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContext";

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
    <TransactionsContext.Provider value={[]}>
      {/* importa o context do Transactions */}
      {/* isso eh um fragment, que nao interfere com as divs dentro do react, eh tipo uma div */}
      {/* <Title>Hello World</Title> */}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTranscactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
